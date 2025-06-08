import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                const mappedPosts = data.map((post: any) => ({
                    userId: post.userId,
                    id: post.id,
                    title: post.title,
                    content: post.body,
                }));
                setPosts(mappedPosts);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
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
            )}
        </div>
    );
};

export default PostsPage;
