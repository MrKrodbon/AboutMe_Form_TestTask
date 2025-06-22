import { axiosInstance } from "@app/api/axiosInstanse";
import type { PostItem } from "@app/types/types";
import axios from "axios";

export const addPosts = async (data: PostItem) => {
  try {
    const response = await axiosInstance.post("/posts/", JSON.stringify(data));

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error("Server error while creating post");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error");
    }
  }
};
