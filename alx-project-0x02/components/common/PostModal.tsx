import React, { useState } from "react";

interface PostModalProps {
    onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onSubmit }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (title.trim() && content.trim()) {
            onSubmit({ title, content });
            setTitle("");
            setContent("");
            setOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Create Post
            </button>

            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
                        <h2 className="text-xl font-semibold mb-4">New Post</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border px-3 py-2 mb-3 rounded"
                        />
                        <textarea
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border px-3 py-2 mb-4 rounded"
                            rows={4}
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostModal;
