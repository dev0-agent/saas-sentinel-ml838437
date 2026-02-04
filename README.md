# SaaS Sentinel

> Guard your codebase. Track bugs. Ship features.

SaaS Sentinel is a multi-tenant issue tracking platform built for developers who need to manage multiple projects simultaneously. It enforces a clear separation between bug tracking ("Elimination") and feature requests, providing a streamlined workflow for software maintenance.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start/latest) (React SSR)
- **Database:** SQLite / PostgreSQL (via Drizzle ORM)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

## Features

- **Project Isolation:** Create and manage distinct workspaces for different software projects.
- **Dual-Track Workflow:** distinct pipelines for Bugs (Fixes) and Features (New capabilities).
- **Status Management:** Track issues from Open → In Progress → Eliminated.
- **Priority Triage:** Tag issues by severity to focus on what matters.
- **Global Dashboard:** Get a bird's-eye view of your entire software portfolio.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd saas-sentinel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   Copy `.env.example` to `.env` and configure your `DATABASE_URL`.

4. **Initialize Database**
   ```bash
   npm run db:push
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## Documentation

- See [TASKLIST.md](./TASKLIST.md) for the development roadmap.
- See [LEARNINGS.md](./LEARNINGS.md) for architectural decisions and notes.
- See [.dev0/RULES.md](./.dev0/RULES.md) for AI coding agent guidelines.