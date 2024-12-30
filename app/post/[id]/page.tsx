"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Header from "../../components/header";
import PostOptions from "../../components/postOptions";
import { url } from "../../../config";
import PostProps from "../../type/type";
import Image from "next/image";
import Profile from "../../svg/logo.svg";
import { useRouter } from "next/router";

interface ExtendedPostProps extends PostProps {
  content: string;
  author: string;
  createdAt: string;
}

export default function Post() {
  const [data, setData] = useState<ExtendedPostProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const postId = params.id;
  const router = useRouter();

  useEffect(() => {
    if (postId) {
      setIsLoading(true);
      axios
        .get(`${url}/post?postId=${postId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching post data:", err);
          setIsLoading(false);
        });
    }
  }, [postId]);

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5 flex">
          <div className="w-2/3">
            {isLoading ? (
              <p>게시글을 불러오는 중입니다...</p>
            ) : data ? (
              <>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <PostOptions postId={data.postId} />
              </>
            ) : (
              <p>게시글을 찾을 수 없습니다.</p>
            )}
          </div>
          <div>
            <div
              style={{ border: "1px solid #A6A6A6" }}
              className="flex flex-col gap-6 items-center justify-center px-10 py-4"
            >
              <Image
                onClick={() => router.push(`/blog/${name}`)}
                width={100}
                height={100}
                src={Profile}
                alt="프로필"
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold">{data?.author} 님의 블로그</h3>
                <span className="text-[12px]">
                  {data?.author} 님의 블로그 입니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
