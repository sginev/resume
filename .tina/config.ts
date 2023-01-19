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
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        // e.g.
        // ---
        // title: 'CCG Prototype'
        // abstract: 'Virtual Collectible Card Game'
        // priority: 5
        // position: 1
        // tags:
        //   - game
        //   - editor
        //   - prototype
        // links:
        //   - id: '4878326'
        //     label: Administration and content management tool
        //     linkType: demo
        //     url: https://ccgw-editor.stefanginev.dev/
        // seoTitle: virtual-collectible-card-game
        // seoTags:
        // ---
        // A multiplayer game, built as a single-page web app.
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
            type: 'number',
            name: 'priority',
            label: 'Priority',
          },
          {
            type: 'number',
            name: 'position',
            label: 'Position',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'image',
            name: 'preview',
            label: 'Preview',
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
          },
          {
            type: 'image',
            name: 'background',
            label: 'Background',
          },
          {
            type: 'image',
            name: 'thumbnail',
            label: 'Thumbnail',
          },
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            templates: [
              {
                fields: [
                  {
                    type: 'string',
                    name: 'id',
                    label: 'ID',
                  },
                  {
                    type: 'string',
                    name: 'label',
                    label: 'Label',
                  },
                  {
                    type: 'string',
                    name: 'linkType',
                    label: 'Link Type',
                  },
                  {
                    type: 'string',
                    name: 'url',
                    label: 'URL',
                  },
                ],
                label: 'Link',
                name: 'link',
              },
            ],
          },
          {
            type: 'string',
            name: 'seoTitle',
            label: 'SEO Title',
          },
          {
            type: 'string',
            name: 'seoTags',
            label: 'SEO Tags',
            list: true,
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
        // e.g.
        // ---
        // title: Casualino & 7Mojos, Varna
        // time: 2020 - 2021
        // role: Game Developer Lead
        // priority: 100
        // position: 1
        // logo: /xp-logos/casualino.avif
        // ---
        // # Casualino & 7Mojos, Varna
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
            type: 'number',
            name: 'priority',
            label: 'Priority',
          },
          {
            type: 'number',
            name: 'position',
            label: 'Position',
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
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
