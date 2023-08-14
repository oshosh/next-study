'use client';

import { ThemeProvider as theme } from '@/themes';
import { GlobalStyle } from '@/themes/globalStyles';
import { ThemeProvider } from 'styled-components';

export default function GlobalThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
