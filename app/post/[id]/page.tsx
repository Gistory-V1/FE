"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Header from "../../components/header";
import SimpleProfile from "../../components/simpleProfile";
import PostOptions from "../../components/postOptions";
import { url } from "../../../config";
import PostProps from "../../type/type";

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
            <SimpleProfile name={data?.author || "알 수 없음"} />
          </div>
        </div>
      </div>
    </div>
  );
}
