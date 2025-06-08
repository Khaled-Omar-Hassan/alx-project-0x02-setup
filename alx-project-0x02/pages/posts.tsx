import Header from "@/components/layout/Header"
import Head from "next/head"
import PostCard from "@/components/common/PostCard";

export default function Posts() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Posts</h1>
                <p className="text-lg text-gray-700">This is the posts page of our Next.js application.</p>
            </div>
            <PostCard title="Post 1" content="This is the content of post 1." userId={1} />
            <PostCard title="Post 2" content="This is the content of post 2." userId={2} />
        </>
    );
}