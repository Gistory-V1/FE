import Image from "next/image";
import Heart from "../svg/heart.svg";
import PostProps from "../type/type";

export default function Lank({ post }: { post: PostProps }) {
  return (
    <div
      style={{ borderBottom: "1px solid #D9D9D9" }}
      className="flex flex-col px-0 gap-5 py-3 border-b border-b-gray-400 w-full"
    >
      <div className="text-gray3">
        <span className="font-bold text-[30px]">1/</span>
        <span>{post.author}</span>
      </div>
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
