import React from "react";
import Header from "@/components/layout/Header";

import PostCard from "../../components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div>
      <h1>Posts Page</h1>
      <PostCard />
    </div>
  );
};

export default PostsPage;
