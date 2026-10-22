import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { Callback } from '@/types';

/**
 * Wraps a function with caching via `react/cache` and `next/cache`.
 *
 * @param fn The function to cache.
 * @param keyParts An array of strings used to construct the cache key.
 * @param options Options for the cache.
 * @param options.revalidate The revalidation interval in seconds. If `false`, never revalidate.
 * @param options.tags An array of tags to invalidate when the cache is updated.
 * @returns The cached function.
 */
export const nextCache = <CachedFunction extends Callback>(
  fn: CachedFunction,
  keyParts?: string[],
  options?: {
    /**
     * The revalidation interval in seconds.
     */
    revalidate?: number | false;
    tags?: string[];
  }
) => unstable_cache(cache(fn), keyParts, options);

type CacheKeys = 'posts' | 'users';

const setting: Record<CacheKeys, { keyParts: string[]; tag?: string }> = {
  posts: { keyParts: ['posts'] },
  users: { keyParts: ['users'] },
};

type CacheConfig = Record<CacheKeys, { keyParts: string[]; tag: string }>;

export const cacheConfig = Object.keys(setting).reduce((acc, key: string) => {
  const { keyParts } = setting[key as CacheKeys];
  const tag = keyParts.join('-');
  return { ...acc, [key]: { keyParts, tag } };
}, {} as CacheConfig);
