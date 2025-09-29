import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
