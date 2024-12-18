"use client";

import Image from "next/image";
import Heart from "../svg/heart.svg";
import fill from "../svg/fillHeart.svg";
import Option from "../svg/option.svg";
import { useState } from "react";

export default function PostOptions() {
  const [isLiked, setIsLiked] = useState(false);
  const [option, setOption] = useState(false);
  return (
    <div>
      <div
        style={{ border: "1px solid #A6A6A6" }}
        className="flex justify-between items-center rounded-2xl px-2 mt-4 py-1 w-[100px]"
      >
        <div className="flex items-center">
          {!isLiked ? (
            <Image src={Heart} alt="빈 하트" onClick={() => setIsLiked(true)} />
          ) : (
            <Image src={fill} alt="하트" onClick={() => setIsLiked(false)} />
          )}
          <span>22</span>
        </div>
        <Image src={Option} alt="옵션" onClick={() => setOption(!option)} />
      </div>
      {option && (
        <ul className="">
          <li style={{ borderBottom: "1px solid #A6A6A6" }}>수정</li>
          <li>삭제</li>
        </ul>
      )}
    </div>
  );
}
