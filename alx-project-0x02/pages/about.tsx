import Button from "@/components/common/Button";
import Header from "@/components/layout/Header"
export default function About() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-700">This is the about page of our Next.js application.</p>
                <Button size="large" shape="rounded-full" />
            </div>
        </>
    );
}