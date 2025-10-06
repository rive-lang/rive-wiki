import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Learn sidebar for beginners
  learnSidebar: [
    {
      type: 'category',
      label: '🚀 Learn Rive',
      items: [
        {
          type: 'category',
          label: '📚 Basics',
          items: [
            'learn/basics/getting-started',
            'learn/basics/basic-syntax',
            'learn/basics/variables-types',
            'learn/basics/control-flow',
          ],
        },
        {
          type: 'category',
          label: '🔧 Intermediate',
          items: [
            'learn/intermediate/functions',
            'learn/intermediate/collections',
          ],
        },
      ],
    },
  ],

  // Develop sidebar for developers
  developSidebar: [
    {
      type: 'category',
      label: '🔧 Develop',
      items: [
        {
          type: 'category',
          label: '⚙️ Compiler',
          items: [
            'develop/compiler/architecture',
          ],
        },
        {
          type: 'category',
          label: '👥 Community',
          items: [
            'develop/community/contributing',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
