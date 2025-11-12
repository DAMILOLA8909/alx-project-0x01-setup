import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <PostCard />
    </div>
  );
};

export default PostsPage;
