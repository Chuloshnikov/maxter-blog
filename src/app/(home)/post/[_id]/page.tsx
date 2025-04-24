import PostPageContainer from "@/components/blog/PostPageContainer";


export default function Post({ params: { _id } }: SearchParamProps) {
 
  return (
    <section className="min-w-screen min-h-[calc(100vh-21.1rem)] mx-auto flex flex-col mb-8">
      <PostPageContainer postId={_id} />
    </section>
  )
}