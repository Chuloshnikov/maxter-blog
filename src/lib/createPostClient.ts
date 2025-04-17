export async function createPostClient(data: {
  title: string;
  desc: string;
  postImg: string;
  slug: string;
}) {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create post');
  }
  return response.json();
}
