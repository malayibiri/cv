import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ProfilePhoto from './ProfilePhoto.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProfilePhoto', ProfilePhoto)
  }
} satisfies Theme
