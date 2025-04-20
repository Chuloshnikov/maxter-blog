import PostPage from "@/components/blog/PostPage";

export default async function Post({ params: { _id } }: SearchParamProps) {
  // URL for API request
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/post/${_id}`
  ).toString();
  // Get posts
  const post = await fetch(url).then((res) => res.json());
  const viewedPosts: string[] = [];

  // Check if post is already viewed
  if (!viewedPosts.includes(_id)) {
    // Increment views
    await fetch(url, { method: "PUT" });
    // Add to viewed posts
    // localStorage.setItem("viewedPosts", JSON.stringify([...viewedPosts, _id]));
  }

  // console.log(post);

  // useEffect(() => {
  //   //Check viewed in localstorage
  //   let viewedPosts = JSON.parse(localStorage.getItem('viewedPosts') || '[]');

  //   // Is views is array
  //   if (!Array.isArray(viewedPosts)) {
  //     viewedPosts = [];
  //   }

  //   //If its first time to viewed
  //   if (!viewedPosts.includes(_id)) {
  //     // Отправляем запрос для увеличения просмотров
  //     fetch(`/api/post/${_id}`, { method: 'PUT' })
  //       .then((res) => res.json())
  //       .then(() => {
  //         // add to viewed
  //         localStorage.setItem('viewedPosts', JSON.stringify([...viewedPosts, _id]));
  //       })
  //       .catch((err) => console.error('Failed to increment view count', err));
  //   }

  //   fetch(`/api/post/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data))
  //     .catch((err) => console.error('Failed to fetch post data', err));
  // }, [_id]);

  return (
    <section className="min-w-screen min-h-[calc(100vh-21.1rem)] mx-auto flex flex-col mb-8">
      {post && <PostPage post={post} />}
    </section>
  );
}
