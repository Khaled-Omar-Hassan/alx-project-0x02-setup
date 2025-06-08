import React, { useState } from "react";
import { type PostModalProps } from "@/interfaces";


const PostModal: React.FC<PostModalProps> = ({ onSubmit }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
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
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">New Post</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                            />
                            <textarea
                                placeholder="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                                rows={4}
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="bg-gray-300 text-black px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default PostModal;
