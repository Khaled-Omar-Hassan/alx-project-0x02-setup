import { Card } from '@/components/common/Card';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
            <p className="text-lg text-gray-700">This is a simple Next.js application.</p>
            <Card title='title1' content='content1' />
            <Card title='title2' content='content2' />
            <Card title='title3' content='content3' />
        </div>
    );
}