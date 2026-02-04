# Task List

This file shows the current progress of all tasks in this project.
It is automatically updated by dev0 as tasks are completed.

---

## Phase 1

- [ ] ⏳ **Configure Environment & Database Connection**
  Create a `src/utils/env.ts` file to validate environment variables (DATABASE_URL). Configure Drizzle ORM client in `src/db/client.ts`. Ensure the project can connect to the database.

- [ ] ⏳ **Define Database Schema**
  Create Drizzle schema files for `projects` and `issues`. 

Projects: id, name, description, created_at.
Issues: id, project_id, title, description, type (bug/feature), status (open/in_progress/done), priority, created_at.

Run migration generation.

- [ ] ⏳ **Implement App Shell Layout**
  Create the main application layout using TanStack Start's file-based routing. Implement a Sidebar navigation using shadcn/ui components. Include links for 'Dashboard' and a placeholder for 'Projects'.

## Phase 2

- [ ] ⏳ **Create Project Server Functions**
  Implement TanStack Start server functions for Projects CRUD: `getProjects`, `createProject`, `deleteProject`. Ensure proper type safety with Zod validators.

- [ ] ⏳ **Build Projects Dashboard**
  Create the main dashboard page (`/`). Fetch the list of projects using the server function. Display projects in a grid of Cards. Add a 'Create Project' dialog using shadcn/ui Dialog and Form.

- [ ] ⏳ **Create Issue Server Functions**
  Implement server functions for Issues: `getIssuesByProjectId`, `createIssue`, `updateIssueStatus`, `deleteIssue`. Include filtering logic for 'type' (bug vs feature).

- [ ] ⏳ **Build Project Detail View**
  Create a dynamic route `/projects/$projectId`. Fetch project details and display them in a header. Implement a basic list view of issues associated with the project.

- [ ] ⏳ **Implement Issue Creation Form**
  Add a 'New Issue' button to the Project Detail view. Open a modal with a form to create an issue. Fields: Title, Description, Type (Select: Bug/Feature), Priority. Connect to `createIssue` server function.

## Phase 3

- [ ] ⏳ **Implement Issue Status Management**
  In the issue list, allow users to update the status of an issue. Use a shadcn/ui Select or DropdownMenu to change status between Open, In Progress, and Eliminated/Done. Optimistically update the UI.

- [ ] ⏳ **Add Issue Filtering and Tabs**
  Refactor the Project Detail view to use shadcn/ui Tabs. Create two tabs: 'Bugs' and 'Features'. Filter the issue list based on the active tab.

## Phase 4

- [ ] ⏳ **Add Priority Indicators and Badges**
  Enhance the Issue List UI. Add color-coded badges for Priority (Red for Critical, etc.) and Status. Improve the visual distinction between Bugs and Features.

- [ ] ⏳ **Implement Global Stats Widget**
  On the main Dashboard, add a summary widget showing total Open Bugs and Pending Features across all projects. Create a new server function `getGlobalStats` for this data.

## Phase 5

- [ ] ⏳ **Documentation and Cleanup**
  Remove any unused template files. Ensure all types are exported from a central location. Verify README instructions match the final implementation.

---

_Last updated by dev0 automation_
