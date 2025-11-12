import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Post Title</h2>
      <p className="text-gray-600">This is a short description of the post.</p>
    </div>
  );
};

export default PostCard;
