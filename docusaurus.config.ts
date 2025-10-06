import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rive Wiki',
  tagline: 'A modern systems programming language',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://rive-lang.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rive-lang', // Usually your GitHub org/user name.
  projectName: 'rive-wiki', // Usually your repo name.

  onBrokenLinks: 'ignore',

  // Internationalization configuration - supports English and Chinese
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      'zh': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit this page links
          editUrl: 'https://github.com/rive-lang/rive-wiki/edit/master/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Edit this page links
          editUrl: 'https://github.com/rive-lang/rive-wiki/edit/master/',
          // Authors map file
          authorsMapPath: 'authors.yml',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'light',
    },
    navbar: {
      title: 'Rive Wiki',
      logo: {
        alt: 'Rive Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: '🚀 Learn',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developSidebar',
          position: 'left',
          label: '🔧 Develop',
        },
        {to: '/blog', label: '📝 Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/rive-lang/rive',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: '🚀 Getting Started',
              to: '/docs/learn/basics/getting-started',
            },
            {
              label: '📚 Learn Rive',
              to: '/docs/learn/basics/basic-syntax',
            },
            {
              label: '🔧 Develop',
              to: '/docs/develop/compiler/architecture',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rive-lang/rive',
            },
            {
              label: 'Issues',
              href: 'https://github.com/rive-lang/rive/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/rive-lang/rive/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/rive-lang/rive/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Code of Conduct',
              href: 'https://github.com/rive-lang/rive/blob/main/CODE_OF_CONDUCT.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Rive Project Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'toml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
