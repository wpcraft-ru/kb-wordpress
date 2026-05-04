# My LLM Coding Workflow Going Into 2026 (excerpt on DESIGN.md)
**Source:** https://addyosmani.com/blog/ai-coding-workflow/
**Fetched:** 2026-05-04

---

## Key sections relevant to DESIGN.md

### Start with a clear plan (specs before code)
Don't just throw wishes at the LLM — begin by defining the problem and planning a solution. Compile this into a comprehensive spec.md — containing requirements, architecture decisions, data models, and a testing strategy.

### Provide extensive context and guidance
LLMs are only as good as the context you provide.

> I think Claude Skills have potential because they turn what used to be fragile repeated prompting into something durable and reusable by packaging instructions, scripts, and domain specific expertise into modular capabilities that tools can automatically apply when a request matches the Skill.

> One of my favorite examples is the frontend-design skill which can "end" the purple design aesthetic prevalent in LLM generated UIs.

### Choose the right model (and use multiple when needed)
Use the best tool for the job. Each model has its own "personality" — if one gets stuck, try another.

### Context packing
- Do a "brain dump" of everything the model should know before coding
- Include high-level goals, invariants, examples of good solutions, warnings about approaches to avoid
- Paste in official docs or README for niche libraries
- Use tools like gitingest or repo2txt to bundle relevant source files

### Key principles
- Treat the LLM as a powerful pair programmer that requires clear direction, context and oversight
- Break work into small, iterative chunks
- Planning first forces you and the AI onto the same page
- Move away from one-off interactions toward workflows that encode repeatable procedures
