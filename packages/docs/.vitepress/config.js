module.exports = {
  title: 'point-of-vue',
  description: 'The globally modifiable frontend that is the point-of-vue ecosystem',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/KenEucker/point-of-vue-globe/edit/main/docs/:path',
      text: 'Edit this page on GitHub' 
    },
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Installation', link: '/guide/installation' },
      {
        text: 'Guide',
        link: '/guide/getting-started',
      },
      {
        text: 'Components',
        link: '/components/',
      },
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/components/': getApiSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
		{ text: 'Installation', link: '/guide/installation' },
		{ text: 'Getting Started', link: '/guide/getting-started' },
		{ text: 'Components', link: '/components/' },
	]
}
function getApiSidebar() {
  return [
		{
			text: 'Components',
			link: '/components/',
			items: [
				{ text: 'ExampleCoreComponent', link: '/components/ExampleCoreComponent' },
				{ text: 'ExampleUtilitiesComponent', link: '/components/ExampleUtilitiesComponent' },
			],
		},
	]
}
