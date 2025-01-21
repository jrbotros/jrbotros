import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type AliasOptions } from 'vite';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const buildTypes = ['production', 'profiling', 'analyze'] as const;
type BuildType = (typeof buildTypes)[number];

function isBuildType(value: string): value is BuildType {
  return buildTypes.includes(value as BuildType);
}


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      checker({
        eslint: { lintCommand: 'eslint . --max-warnings=0' },
        typescript: true,
      }),
      react(),
      viteTsconfigPaths({
        root: process.cwd(),
      }),
    ],
    build: {
      outDir: 'build',
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
      testMatch: ['./src/**/*.test.{js,ts,tsx}'],
      globals: false,
      exclude: ['node_modules'],
    },
  };
});
