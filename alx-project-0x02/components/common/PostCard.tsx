import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="border border-gray-300 rounded p-4 shadow-sm bg-white">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-700 mb-2">{content}</p>
            <span className="text-xs text-gray-500">Posted by User {userId}</span>
        </div>
    );
};

export default PostCard;
