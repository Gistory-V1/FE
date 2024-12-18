"use client";

import SimpleProfile from "../../components/simpleProfile";
import Header from "../../components/header";
import PostOptions from "../../components/postOptions";
import axios from "axios";
import { useParams } from "next/navigation";
import { url } from "../../../config";
import { useState } from "react";

export default function Post() {
  const [data, setData] = useState({});
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
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5 flex">
          <div className="w-2/3">
            <h1>제목입니다다</h1>
            <p>내용입니다다다다다다</p>
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
