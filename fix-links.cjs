#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const docsDir = path.resolve(__dirname, 'src/content/docs');

// Collect all .md files
function walk(dir, base = docsDir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full, base));
    } else if (entry.name.endsWith('.md')) {
      results.push({ abs: full, rel: path.relative(base, full) });
    }
  }
  return results;
}

const allFiles = walk(docsDir);
const fileSet = new Set(allFiles.map(f => f.rel));
const dirIndexes = new Set(allFiles.filter(f => f.rel.endsWith('/index.md') || f.rel === 'index.md').map(f => f.rel));

function resolveLink(fromFileRel, linkTarget) {
  // fromFileRel is relative to docsDir, e.g. "content/wordpress-editor-blocks.md"
  // linkTarget is the href, e.g. "./pages-posts-and-taxonomies-basics/" or "../themes/site-editor/"
  const fromDir = path.dirname(fromFileRel);
  const resolved = path.normalize(path.join(fromDir, linkTarget));
  return resolved;
}

function findBestMdTarget(resolved) {
  // Try exact match
  if (fileSet.has(resolved + '.md')) return resolved + '.md';
  // If resolved ends with /, try removing /
  const stripped = resolved.endsWith('/') ? resolved.slice(0, -1) : resolved;
  if (fileSet.has(stripped + '.md')) return stripped + '.md';
  // Try index.md in directory
  if (fileSet.has(stripped + '/index.md')) return stripped + '/index.md';
  if (dirIndexes.has(stripped + '/index.md')) return stripped + '/index.md';
  // Try as exact file
  if (fileSet.has(stripped)) return stripped;
  return null;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const fromRel = path.relative(docsDir, filePath);
  let changed = false;

  // Match markdown links: [text](relative/path)
  const linkRegex = /\[([^\]]*)\]\((\.[^)]+)\)/g;
  let match;
  let newContent = content;

  while ((match = linkRegex.exec(content)) !== null) {
    const [fullMatch, text, href] = match;
    
    // Skip external links
    if (href.startsWith('http://') || href.startsWith('https://')) continue;
    // Skip already correct .md links
    if (href.endsWith('.md')) continue;
    // Skip anchor-only links
    if (href.startsWith('#')) continue;

    const resolved = resolveLink(fromRel, href);
    const best = findBestMdTarget(resolved);
    
    if (best) {
      // Reconstruct the relative link
      const fromDir = path.dirname(fromRel);
      let newHref = path.relative(fromDir, best);
      if (!newHref.startsWith('.')) newHref = './' + newHref;
      
      if (newHref !== href) {
        const newFull = `[${text}](${newHref})`;
        console.log(`  ${path.relative(docsDir, filePath)}: [${text}](${href}) → [${text}](${newHref})`);
        newContent = newContent.split(fullMatch).join(newFull);
        changed = true;
      }
    } else {
      console.log(`  WARNING ${path.relative(docsDir, filePath)}: [${text}](${href}) → target not found (resolved: ${resolved})`);
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

console.log('Scanning for broken links...\n');
let fixedCount = 0;

for (const { abs, rel } of allFiles) {
  if (processFile(abs)) fixedCount++;
}

console.log(`\nDone. Fixed ${fixedCount} files.`);
