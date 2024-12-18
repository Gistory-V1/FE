import Image from "next/image";
import Heart from "../svg/heart.svg";
import PostProps from "../type/type";

export default function Post({ post }: { post: PostProps }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <ul>
        <li>
          <Image src={Heart} alt="좋아요" />
          <span>{post.like}</span>
        </li>
        <li>{post.view} 조회</li>
        <li>{post.createdAt}일 전</li>
      </ul>
    </div>
  );
}
