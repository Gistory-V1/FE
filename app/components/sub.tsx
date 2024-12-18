"use client";

import Image from "next/image";
import Plus from "../svg/plus.svg";
import axios from "axios";
import { url } from "../../config";
import { useState } from "react";

interface SubProps {
  rank: number;
  sub: number;
  name: string;
}

export default function Sub(post: SubProps) {
  const [count, setCount] = useState(post.sub);
  const [sub, setSub] = useState(false);
  function subscribe() {
    axios
      .post(`${url}/sub`)
      .then((res) => {
        setCount(res.data.subCount);
        setSub(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function cancel() {
    axios
      .delete(`${url}/sub`)
      .then((res) => {
        setCount(res.data.subCount);
        setSub(false);
      })
      .catch((err) => {
        console.log(err);
        setCount(count + 1);
      });
  }
  return (
    <div className="flex justify-between items-center w-[420px] rounded-md p-4 bg-gray4">
      <span className="font-bold text-black1 text-[30px]">{post.rank}</span>
      <div className="flex  gap-2 flex-col">
        <h3 className="text-20 font-bold">{post.name}</h3>
        <span className="text-gray3 text-[12px]">✅ 구독자 {post.sub}명</span>
      </div>
      <button
        onClick={sub ? cancel : subscribe}
        className="gap-1 border border-black1 text-[14px] py-2 px-3 rounded-2xl flex items-center justify-center"
      >
        <Image src={Plus} alt="구독" />
        구독
      </button>
    </div>
  );
}
