import { relations } from 'drizzle-orm';
import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const typeEnum = pgEnum('issue_type', ['bug', 'feature']);
export const statusEnum = pgEnum('issue_status', ['open', 'in_progress', 'done']);
export const priorityEnum = pgEnum('issue_priority', ['low', 'medium', 'high', 'critical']);

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const issues = pgTable('issues', {
  id: serial('id').primaryKey(),
  projectId: integer('project_id')
    .references(() => projects.id)
    .notNull(),
  title: text('title').notNull(),
  description: text('description'),
  type: typeEnum('type').notNull(),
  status: statusEnum('status').default('open').notNull(),
  priority: priorityEnum('priority').default('medium').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  issues: many(issues),
}));

export const issuesRelations = relations(issues, ({ one }) => ({
  project: one(projects, {
    fields: [issues.projectId],
    references: [projects.id],
  }),
}));

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;

export type Issue = typeof issues.$inferSelect;
export type NewIssue = typeof issues.$inferInsert;