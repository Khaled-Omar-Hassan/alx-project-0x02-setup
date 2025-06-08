import React from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
    posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <div className="space-y-4">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        userId={post.userId}
                    />
                ))}
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const posts: PostProps[] = data.map((post: any) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        content: post.body,
    }));

    return {
        props: {
            posts,
        },
    };
};

export default PostsPage;
