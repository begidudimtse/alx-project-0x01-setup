import React from "react";
import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p className="text-gray-700 mb-2">@{user.username}</p>
        <p className="text-gray-700 mb-2">Email: {user.email}</p>
        <p className="text-gray-700 mb-2">Phone: {user.phone}</p>
        <p className="text-gray-700 mb-2">Website: {user.website}</p>
        <p className="text-gray-700 mb-2">Company: {user.company.name}</p>
        <p className="text-gray-700">
          Address: {user.address.street}, {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserModal;
