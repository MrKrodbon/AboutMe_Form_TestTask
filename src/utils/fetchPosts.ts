import { axiosInstance } from "../api/axiosInstanse";
import axios from "axios";

interface fetchPostsData {
  _page: number;
  _limit: number;
}

export const fetchPosts = async ({
  _page = 1,
  _limit = 10,
}: fetchPostsData) => {
  try {
    const params = new URLSearchParams();
    params.append("_limit", _limit.toString());
    params.append("_page", _page.toString());
    const { data } = await axiosInstance.get("/posts", {
      params: {
        _limit,
        _page,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error("Server error while getting posts");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error");
    }
  }
};
