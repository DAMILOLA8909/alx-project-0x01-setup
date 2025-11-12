import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts</h1>
        <PostCard />
      </main>
    </div>
  );
};

export default PostsPage;
