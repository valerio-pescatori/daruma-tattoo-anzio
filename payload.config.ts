import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { buildConfig } from 'payload';
import { Artist } from './db/types/artist';
import { resolve } from 'path';

export default buildConfig({
  editor: lexicalEditor(),
  // Define and configure your collections in this array
  collections: [Artist],
  typescript: {
    autoGenerate: true,
  },
  secret: process.env.PAYLOAD_SECRET!,
  db: sqliteAdapter({
    client: {
      url: `file://admin:test@${resolve(process.cwd(), process.env.DB_FILE_NAME!)}`,
      authToken: process.env.PAYLOAD_SECRET!,
    },
  }),
  sharp,
});
