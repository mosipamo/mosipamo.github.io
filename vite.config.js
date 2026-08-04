import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/' (the default) is correct for a GitHub *user* page served at
  // https://<username>.github.io/ from a repo literally named
  // <username>.github.io — which is this project. If you ever move this
  // into a *project* page repo instead (https://<username>.github.io/repo-name/),
  // set base: '/repo-name/' here.
})
