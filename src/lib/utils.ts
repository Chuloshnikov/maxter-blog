import { PostInfo } from "@/models/Post";

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function replaceUrlDelimiters(str: string) {
    return str.replace(/[^a-zA-Z0-9\s]/g, ' ');
}



  
  export function findMostCommonCategory(posts: PostInfo[]): string | null {
     // If post is array
  if (!Array.isArray(posts)) {
    console.error('Expected an array of posts');
    return null; // Catch err if not
  }

  // Check all slug
  const slugCount = posts.reduce<{ [key: string]: number }>((acc, post) => {
    if (post.slug) {
      acc[post.slug] = (acc[post.slug] || 0) + 1; // Increase slug count
    }
    return acc;
  }, {});

  // Find max slug 
  let mostCommonSlug: string | null = null;
  let maxCount = 0;

  for (const slug in slugCount) {
    if (slugCount[slug] > maxCount) {
      maxCount = slugCount[slug];
      mostCommonSlug = slug;
    }
  }

  return mostCommonSlug;
  }
