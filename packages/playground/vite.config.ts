// vite.config.js
/// <reference types="histoire" />

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
process.env.NODE_ENV

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// we alias to the lib's source files in dev
			// so we don't need to rebuild the lib over and over again
			'@point-of-vue-globe/lib':
				process.env.NODE_ENV === 'production'
					? '@point-of-vue-globe/lib'
					: '@point-of-vue-globe/lib/src/index.ts',
		},
		dedupe: ['vue'],
	},
	build: {
		// we don't minify so we can look at the bundle ouput. Change if you wanna deploy the playground
		minify: process.env.NODE_ENV === 'production',
		rollupOptions: {
			// Comment in to move vue out of the bundle - easier to look at it that way.
			// external: ['vue'],
		},
	},
	optimizeDeps: {
		exclude: ['@point-of-vue-globe/lib'],
	},
	histoire: {
		// your Histoire configuration
	},
})
