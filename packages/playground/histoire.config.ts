import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
	plugins: [HstVue()],
	setupFile: 'histoire.setup.ts',
	outDir: 'playground',
	storyMatch: ['../lib/src/**/*.story.vue', 'src/stories/**/*.story.vue'],
	routerMode: 'hash',
	tree: {
		// file: 'path',
		order: 'asc',
	},
	vite: {
		server: {
			fs: {
				allow: ['../lib/src'],
			},
		},
	},
})
