import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { join, relative } from 'path';

const nextConfig: NextConfig = {};

function getNextIntlRequestConfigPath(): string {
  const requestConfigAbsolutePath = join(__dirname, 'src/i18n/request.ts');
  const requestConfigRelativePath = relative(
    process.cwd(),
    requestConfigAbsolutePath
  );

  return requestConfigRelativePath.startsWith('.')
    ? requestConfigRelativePath
    : `./${requestConfigRelativePath}`;
}

const withNextIntl = createNextIntlPlugin(getNextIntlRequestConfigPath());
export default withNextIntl(nextConfig);
