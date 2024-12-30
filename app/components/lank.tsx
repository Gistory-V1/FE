"use client";

import Image from "next/image";
import Heart from "../svg/heart.svg";
import { useRouter } from "next/navigation";

export interface postLankProps {
  rank: number;
  name: string;
  title: string;
  likeCount: number;
  views: number;
  createdAt: string;
  postId: number;
}

export default function Lank({ post }: { post: postLankProps }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/post/${post.postId}`)}
      style={{ borderBottom: "1px solid #D9D9D9" }}
      className="flex flex-col px-0 gap-5 py-3 border-b cursor-pointer border-b-gray-400 w-full"
    >
      <div className="text-gray3">
        <span className="font-bold text-[30px]">{post.rank}/</span>
        <span>{post.name}</span>
      </div>
      <h3 className="font-bold">{post.title}</h3>
      <ul className="flex gap-4 items-center text-gray1 text-[12px]">
        <li className="flex gap-1 items-center">
          <Image src={Heart} alt="좋아요" />
          <span>{post.likeCount}</span>
        </li>
        <li>{post.views} 조회</li>
        <li>{post.createdAt}</li>
      </ul>
    </div>
  );
}
