import Image from "next/image";
import Heart from "../svg/heart.svg";
import PostProps from "../type/type";

export default function Post({ post }: { post: PostProps }) {
  return (
    <div className="flex flex-col gap-5 px-4 py-3 border-b border-b-gray-400 w-[420px]">
      <h3 className="font-bold">{post.title}</h3>
      <ul className="flex gap-4 items-center text-gray1 text-[12px]">
        <li className="flex gap-1 items-center">
          <Image src={Heart} alt="좋아요" />
          <span>{post.like}</span>
        </li>
        <li>{post.view} 조회</li>
        <li>{post.createdAt}</li>
      </ul>
    </div>
  );
}
