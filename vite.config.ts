import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// import mdPlugin, { Mode }  from 'vite-plugin-markdown';
// import injectHTML from 'vite-plugin-html-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    //injectHTML(),
    //mdPlugin({
      /* mode: [Mode.MARKDOWN] */
    //}),
/*     {
      name: 'html-loader',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.html')) {
          return `export default ${JSON.stringify(code)}`;
        }
      },
    }, */
  ],
  build: {
    sourcemap: true,
  },
});
