import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: '36d1f59d-32d7-4ae4-9cd1-12b89046971a', // Get this from tina.io
  token: '9898ae7e9b31310ad2d3dc113d73b32de668e650', // Get this from tina.io
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
    ],
  },
});
