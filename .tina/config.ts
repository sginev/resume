import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: '1ed56c5a-9be1-4426-9018-cfb863dba85f', // Get this from tina.io
  token: '9974026342e66634c4b8c6b32092fe48e9167136', // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'project',
        label: 'Projects',
        path: 'content/projects',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'abstract',
            label: 'Abstract Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: () => `/`,
        },
      },
      {
        name: 'experience',
        label: 'Experience',
        path: 'content/experience',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'time',
            label: 'Dates',
          },
          {
            type: 'string',
            name: 'role',
            label: 'Role',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: () => `/`,
        },
      },
    ],
  },
});
