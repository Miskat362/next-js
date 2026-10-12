import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import Comments from "@/app/components/Comments";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostPage({ params }) {
    const { id } = await params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComment({ id });

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    const post = await postPromise;

    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
            <hr />
            <Suspense fallback={<div>Loading comments...</div>}>
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}
