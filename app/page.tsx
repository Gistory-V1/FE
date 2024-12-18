"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../app/globals.css";
import Header from "./components/header";
import Post from "./components/post";
import PostProps from "./type/type";
import { url } from "../config";
import Sub from "./components/sub";
import Lank from "./components/lank";
import LoginOption from "./components/loginOption";
import Profile from "./components/profile";

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
  const example = {
    postId: 1,
    title: "하이티비",
    author: "배경진",
    view: 4,
    createdAt: "1일 전",
    sub: 3,
    like: 2,
  };
  return (
    <div>
      <Header />
      <div className="flex px-6">
        <div className="flex flex-col gap-5 w-2/3">
          {posts.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
          <Lank post={example} />
          <Lank post={example} />
          <Lank post={example} />
          <Lank post={example} />
          <Lank post={example} />
        </div>
        <div
          className=" flex flex-col items-left border-l pl-10 h-full border-l-gray1"
          style={{ borderLeft: "1px solid #868686" }}
        >
          <Profile />
          <div className="mt-2 flex flex-col gap-5">
            <h2 className="font-extrabold text-[20px]">구독자 왕👑</h2>
            <Sub />
            <Post post={example} />
            <Post post={example} />
            <Sub />
            <Post post={example} />
            <Post post={example} />
          </div>
        </div>
      </div>
    </div>
  );
}
