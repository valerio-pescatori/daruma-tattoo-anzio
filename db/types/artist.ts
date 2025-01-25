import { CollectionConfig } from 'payload';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('artist', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  styles: text().notNull(),
  description: text().notNull(),
  email: text().notNull().unique(),
});

export const Artist: CollectionConfig = {
  slug: 'artista',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'styles',
      type: 'text',
      hasMany: true,
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
  ],
};
