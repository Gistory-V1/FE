"use client";

import Image from "next/image";
import Heart from "../svg/heart.svg";
import fill from "../svg/fillHeart.svg";
import { useState } from "react";

export default function PostOptions() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      {!isLiked ? (
        <Image src={Heart} alt="빈 하트" onClick={() => setIsLiked(true)} />
      ) : (
        <Image src={fill} alt="하트" onClick={() => setIsLiked(false)} />
      )}
    </div>
  );
}
