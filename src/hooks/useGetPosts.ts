import { useEffect, useState } from "react";
import type { PostItem } from "../types/types";
import { fetchPosts } from "../utils/fetchPosts";

interface getPostsProps {
  currentPage: number;
}

export const useGetPosts = ({ currentPage }: getPostsProps) => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    const handleFetchPosts = async () => {
      const data = await fetchPosts({ _limit: 10, _page: currentPage });
      setPosts(data);
    };

    handleFetchPosts();
  }, [currentPage]);

  return posts;
};
