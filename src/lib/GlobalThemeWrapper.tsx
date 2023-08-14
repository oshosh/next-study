'use client';

import { ThemeProvider as theme } from '@/themes';
import { ThemeProvider } from 'styled-components';

export default function GlobalThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
