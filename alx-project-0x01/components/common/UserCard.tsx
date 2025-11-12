import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">@{username}</p>
      <p className="text-gray-700 mb-2">{email}</p>
      <p className="text-gray-700 mb-2">{phone}</p>
      <p className="text-blue-500 mb-4">
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>
      <div className="text-sm text-gray-500">
        <p>
          <strong>Company:</strong> {company.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {company.catchPhrase}
        </p>
        <p>
          <strong>Address:</strong> {address.street}, {address.city}
        </p>
      </div>
      <div className="mt-4 text-xs text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
