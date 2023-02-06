// import plugin from 'portal-vue'
import DefaultTheme from 'vitepress/theme'
import { PointOfVuePlugin } from '@point-of-vue/lib'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PointOfVuePlugin)
  },
}
