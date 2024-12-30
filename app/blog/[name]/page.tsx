"use client";

import { useParams } from "next/navigation";
import Header from "../../components/header";
import Post from "../../components/post";
import SimpleProfile from "../../components/simpleProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../config";
import PostProps from "../../type/type";

export default function BlogPage() {
  const [posts, setPosts] = useState<PostProps[] | null>(null);

  const params = useParams();
  const name = Array.isArray(params.name)
    ? params.name[0]
    : params.name || "알 수 없음";

  useEffect(() => {
    axios
      .get(`${url}/post/list/${name}`)
      .then((res) => {
        setPosts(res.data); // API 응답 데이터 설정
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setPosts([]); // 에러가 발생할 경우 빈 배열로 초기화
      });
  }, [name]);

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5 flex">
          <div className="w-2/3 flex flex-col gap-8">
            <h1 className="font-bold text-[26px] mt-8">{name} 님의 블로그</h1>
            <div
              style={{ borderBottom: "1px solid #A6A6A6" }}
              className="flex font-bold text-[20px] pb-6 w-[650px]"
            >
              <h3>전체 글 </h3>
              <h3 className="text-red-600">{posts ? posts.length : 0}</h3>
            </div>
            {posts && posts.length > 0 ? (
              posts.map((post) => <Post key={post.postId} post={post} />)
            ) : (
              <p>게시글이 없습니다.</p>
            )}
          </div>
          <SimpleProfile name={name} />
        </div>
      </div>
    </div>
  );
}
