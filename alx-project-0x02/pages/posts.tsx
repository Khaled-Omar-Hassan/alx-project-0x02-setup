import Header from "@/components/layout/Header"
import Head from "next/head"

export default function Posts() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Posts</h1>
                <p className="text-lg text-gray-700">This is the posts page of our Next.js application.</p>
            </div>
        </>
    );
}