import { cache } from 'react';

type CachedFunction = Parameters<typeof cache>[0];

/**
 * Wrap react cache() function to be a no-op when running in Storybook where
 * cache doesn't work.
 * (0 , react__WEBPACK_IMPORTED_MODULE_0__.cache) is not a function
 */
export function reactCache<T extends CachedFunction>(fn: T): T {
  return typeof cache === 'function' ? cache(fn) : fn();
}
