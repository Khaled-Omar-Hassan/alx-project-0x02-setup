import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="space-y-4">
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </div>
        </div>
    );
};

// ✅ This is the actual getStaticProps() function
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users: UserProps[] = data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
    }));

    return {
        props: {
            users,
        },
    };
}

export default UsersPage;
