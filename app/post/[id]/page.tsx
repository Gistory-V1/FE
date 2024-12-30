"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header";
import SimpleProfile from "../../components/simpleProfile";
import PostOptions from "../../components/postOptions";
import { url } from "../../../config";
import PostProps from "../../type/type";

interface ExtendedPostProps extends PostProps {
  content: string;
}

export default function Post() {
  const [data, setData] = useState<ExtendedPostProps | null>(null);

  useEffect(() => {
    axios
      .get(`${url}/post/${data?.postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data?.postId]);

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5 flex">
          <div className="w-2/3">
            <h1>{data?.title}</h1>
            <p>{data?.content}</p>
            <PostOptions postId={data?.postId} />
          </div>
          <div>
            <SimpleProfile name={data?.author || "알 수 없음"} />
          </div>
        </div>
      </div>
    </div>
  );
}
