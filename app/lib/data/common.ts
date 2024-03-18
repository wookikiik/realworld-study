// Define an asynchronous function to fetch data

import { GET } from '../utils/fetcher';

/**
 * @see https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#get-tags
 */
export const fetchTags = async (): Promise<{ tags: string[] }> => {
  const { tags } = await GET({
    url: '/tags',
  });

  return { tags };
};
