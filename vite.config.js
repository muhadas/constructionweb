import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),sitemap({
      hostname: 'https://yourdomain.com',
      dynamicRoutes: [
        '/',
        '/aboutus',
        '/projects',
        '/blogs',
        '/organization',
        '/certification',
        '/blogs',
        '/contactus'
      ]
    }),
   
    babel({ presets: [reactCompilerPreset()] })  ],
    base : process.env.VITE_BASE_PATH || "/ "

})
