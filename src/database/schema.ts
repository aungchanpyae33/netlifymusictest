// import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

// export const userTable = sqliteTable("users", {
//   id: text("id").notNull().primaryKey(),
//   github_id: text("number").unique().notNull(),
//   username: text("string").notNull(),
// });

// export const sessionTable = sqliteTable("session", {
//   id: text("id").notNull().primaryKey(),
//   userId: text("user_id")
//     .notNull()
//     .references(() => userTable.id),
//   expiresAt: integer("expires_at").notNull(),
// });
// export type CheckUser = typeof userTable.$inferInsert;
