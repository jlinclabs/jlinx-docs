
module.exports = createConfig
async function createConfig(){
  const { default: mdxMermaid } = await import('mdx-mermaid')

  // @ts-check
  // Note: type annotations allow type checking and IDEs autocompletion

  const lightCodeTheme = require('prism-react-renderer/themes/github')
  const darkCodeTheme = require('prism-react-renderer/themes/nightOwl')
  // const darkCodeTheme = require('prism-react-renderer/themes/shadesOfPurple')
  // const darkCodeTheme = require('prism-react-renderer/themes/dracula')
  // const darkCodeTheme = require('prism-react-renderer/themes/vsDark')
  // const darkCodeTheme = require('prism-react-renderer/themes/synthwave84')

  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'JLINX Docs',
    tagline: 'Jlinx Documentation',
    url: 'https://docs.jlinx.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'jlinclabs', // Usually your GitHub org/user name.
    projectName: 'jlinx', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            remarkPlugins: [mdxMermaid],
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/jlinclabs/jlinx-docs/blob/master',
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   // Remove this to remove the "edit this page" links.
          //   editUrl:
          //     'https://github.com/jlinclabs/jlinx-docs/tree/main/packages/create-docusaurus/templates/shared/',
          // },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: 'Jlinx',
          logo: {
            alt: 'Jlinx Logo',
            // src: 'img/logo.svg',
            src: 'img/jlinx-looking.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            // {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/jlinclabs/jlinx',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Docs',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/jlinx',
                },
                {
                  label: 'Discord',
                  href: 'https://discordapp.com/invite/jlinx',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/jlinx',
                },
              ],
            },
            {
              title: 'More',
              items: [
                // {
                //   label: 'Blog',
                //   to: '/blog',
                // },
                {
                  label: 'GitHub',
                  href: 'https://github.com/jlinclabs/jlinx',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Jlinc Labs.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
}

