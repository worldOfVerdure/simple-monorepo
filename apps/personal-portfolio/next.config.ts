import type { NextConfig } from 'next';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const appRoot = dirname(fileURLToPath(import.meta.url));
const monorepoRoot = resolve(appRoot, '../..');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/andrew_chupka_resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="andrew_chupka_resume.pdf"',
          },
        ],
      },
    ];
  },
  turbopack: {
    root: monorepoRoot,
  },
};

export default nextConfig;
