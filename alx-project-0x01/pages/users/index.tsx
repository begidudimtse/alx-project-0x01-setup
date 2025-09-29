import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

// ✅ Fetch users at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
