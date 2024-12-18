import Image from "next/image";
import Profile from "../svg/logo.svg";

export default function SimpleProfile() {
  return (
    <div>
      <Image src={Profile} alt="프로필" />
      <h3>모태환 님의 블로그</h3>
      <span>모태환 님의 블로그 입니다</span>
      <button>글쓰기</button>
    </div>
  );
}
