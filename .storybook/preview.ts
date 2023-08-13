import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../src/themes';
import * as NextImage from 'next/image';
import React from 'react';

// https://storybook.js.org/recipes/styled-components
// https://wikibook.co.kr/ts-react-nextjs/
const GlobalStyles = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

const preview: Preview = {
  // decorators:
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string'
      ? React.createElement(OriginalNextImage, {
          ...props,
          unoptimized: true,
          blurDataURL: props.src,
        })
      : React.createElement(OriginalNextImage, { ...props, unoptimized: true }),
});

export default preview;
