import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border border-gray-300 rounded p-4 shadow-sm bg-white">
            <h3 className="text-lg font-bold mb-1">{name}</h3>
            <p className="text-sm text-gray-700 mb-1">{email}</p>
            <p className="text-sm text-gray-500">
                {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </p>
        </div>
    );
};

export default UserCard;
