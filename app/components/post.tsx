"use client";

import Image from "next/image";
import Heart from "../svg/heart.svg";
import { useRouter } from "next/navigation";

interface PostProps {
  postId: number;
  title: string;
  content: string;
  likeCount: number;
  views: number;
}

export default function Post({ post }: { post: PostProps }) {
  const route = useRouter();
  return (
    <div
      onClick={() => route.push(`/post/${post.postId}`)}
      style={{ borderBottom: "1px solid #A6A6A6" }}
      className="flex flex-col gap-5 px-4 py-3 border-b border-b-gray-400 w-[650px]"
    >
      <h3 className="font-bold">{post.title}</h3>
      <ul className="flex gap-4 items-center text-gray1 text-[12px]">
        <li className="flex gap-1 items-center">
          <Image src={Heart} alt="좋아요" />
          <span>{post.likeCount}</span>
        </li>
        <li>{post.views} 조회</li>
      </ul>
    </div>
  );
}
