import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

interface UsersProps {
  posts: UserData[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const handleAddUserClick = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((user) => (
          <div key={user.id}>
            <UserCard {...user} />
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => handleAddUserClick(user)}
            >
              Add User
            </button>
          </div>
        ))}
      </div>

      <UserModal isOpen={isModalOpen} onClose={closeModal} user={selectedUser} />
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
