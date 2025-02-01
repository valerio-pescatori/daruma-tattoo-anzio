import { CollectionConfig } from 'payload';

export const Artist: CollectionConfig = {
  slug: 'artist',
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
    {
      name: 'profilePic',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      type: 'upload',
      hasMany: true,
      relationTo: 'media',
    },
  ],
  timestamps: false,
};
