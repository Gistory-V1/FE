"use client";

import Image from "next/image";
import Plus from "../svg/plus.svg";
import axios from "axios";
import { url } from "../../config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface SubProps {
  rank: number;
  sub: number;
  name: string;
}

export default function Sub({ rank, sub, name }: SubProps) {
  const [count, setCount] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const route = useRouter();
  useEffect(() => {
    setCount(sub);
  }, [sub]);
  const subscribe = () => {
    axios
      .post(
        `${url}/subs`,
        {
          name: name,
          subClick: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setCount(res.data.subCount);
        setIsSubscribed(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const cancel = () => {
    axios
      .post(
        `${url}/subs/cancel`,
        {
          name: name,
          subClick: false,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setCount(res.data.subCount);
        setIsSubscribed(false);
      })
      .catch((err) => {
        console.error(err);
        setCount(count + 1);
      });
  };

  return (
    <div
      onClick={() => route.push(`/blog/${name}`)}
      className="flex cursor-pointer justify-between items-center w-[420px] rounded-md p-4 bg-gray4"
    >
      <div className="flex gap-4 items-center">
        <span className="font-bold text-black1 text-[30px]">{rank}</span>
        <div className="flex gap-2 flex-col">
          <h3 className="text-20 font-bold">{name}</h3>
          <span className="text-gray3 text-[12px]">✅ 구독자 {count}명</span>
        </div>
      </div>
      <button
        onClick={isSubscribed ? cancel : subscribe}
        className="gap-1 border border-black1 text-[14px] py-2 px-3 rounded-2xl flex items-center justify-center"
      >
        <Image src={Plus} alt="구독" />
        {isSubscribed ? "구독 취소" : "구독"}
      </button>
    </div>
  );
}
