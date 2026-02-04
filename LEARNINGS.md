# Project Learnings

This file tracks insights and learnings from agents working on this project.
Each agent updates this file after completing a task.

## Guidelines for Agents

When updating this file:
- Document edge cases you encountered
- Note errors you fixed and how
- Share tips that would help future agents
- Mention any important architectural decisions
- Keep entries concise but informative

## Format

Use this format when adding learnings:

```markdown
### Task: [Task Title]
- **Completed:** [Date]
- **Task ID:** [ID]
- **Learnings:**
  - [Learning 1]
  - [Learning 2]
  - [Learning 3]
```

---

## Learnings Log

### Task: Configure Environment & Database Connection
- **Completed:** 2026-02-04
- **Task ID:** 0dd5d3f8-9c8c-4ba0-8f49-afab3d51c97a
- **Learnings:**
  - Installed `drizzle-orm`, `postgres.js`, and `zod` as they were missing from the initial template.
  - Used `zod` for environment variable validation in `src/utils/env.ts`.
  - Configured Drizzle client in `src/db/client.ts` using `postgres.js` driver.
  - Created a placeholder `src/db/schema.ts` to satisfy Drizzle initialization requirements.

