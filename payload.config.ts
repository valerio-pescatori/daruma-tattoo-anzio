import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { buildConfig } from 'payload';
import { Artist } from './db/types/Artist';
import { normalize, resolve } from 'path';
import { cwd } from 'process';
import { Media } from './db/types/Media';

export default buildConfig({
  editor: lexicalEditor(),
  // Define and configure your collections in this array
  collections: [Artist, Media],
  typescript: {
    autoGenerate: true,
  },
  secret: process.env.PAYLOAD_SECRET!,
  db: sqliteAdapter({
    client: {
      url: `file:///${normalize(resolve(cwd(), process.env.DB_FILE_NAME!))}`,
      authToken: process.env.PAYLOAD_SECRET!,
    },
  }),
  sharp,
});
