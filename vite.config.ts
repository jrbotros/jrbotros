import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      checker({
        eslint: {
          lintCommand: 'eslint "**/*.{ts,tsx,js,jsx}" --max-warnings=0',
        },
        typescript: true,
      }),
      react({ jsxRuntime: 'classic' }),
      viteTsconfigPaths({
        root: process.cwd(),
      }),
    ],
    build: {
      outDir: 'build',
      sourcemap: process.env.node_env !== 'production',
      rollupOptions: {
        onwarn({ loc }) {
          return loc?.file?.includes('node_modules');
        },
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
    },
    test: {
      environment: 'jsdom',
      globals: false,
      exclude: ['node_modules'],
    },
  };
});
