"use client";

import SimpleProfile from "../../components/simpleProfile";
import Header from "../../components/header";
import PostOptions from "../../components/postOptions";
import axios from "axios";
import { useParams } from "next/navigation";
import { url } from "../../../config";
import { useEffect, useState } from "react";
import PostProps from "../../type/type";

interface ExtendedPostProps extends PostProps {
  content: string;
}

export default function Post() {
  const [data, setData] = useState<ExtendedPostProps | null>(null);

  const params = useParams();
  function getData() {
    axios
      .get(`${url}/post/${params.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5 flex">
          <div className="w-2/3">
            <h1>{data?.title}</h1>
            <p>{data?.content}</p>
            <PostOptions />
          </div>
          <div>
            <SimpleProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
