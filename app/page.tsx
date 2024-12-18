import React, { useEffect, useState } from "react";
import axios from "axios";
import "../app/globals.css";
import Header from "./components/header";
import { url } from "inspector";
import Post from "./components/post";
import PostProps from "./type/type";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${url}/main`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex w-2/3">
        <div>
          {posts.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </div>
        <div className="flex flex-col items-center border-l border-l-gray-300 pl-4">
          <h4 className="mb-4">gistory에 로그인하여 블로그를 즐겨보아요</h4>
          <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
            로그인
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
