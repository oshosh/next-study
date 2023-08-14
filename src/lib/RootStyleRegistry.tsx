'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useStyledComponentsRegistry } from './useStyledComponentsRegistry';
import { ThemeProvider as theme } from '@/themes';
import { GlobalStyle } from '@/themes/globalStyles';
import { ThemeProvider } from 'styled-components';

/**
 * Next 13 Styled Components Settings
 * SSR, GlobalStyle, DefaultTheme..
 */
export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
