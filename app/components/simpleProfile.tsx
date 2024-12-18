import Image from "next/image";
import Profile from "../svg/logo.svg";

export default function SimpleProfile() {
  return (
    <div
      style={{ border: "1px solid #A6A6A6" }}
      className="flex flex-col gap-6 items-center justify-center px-10 py-4"
    >
      <Image width={100} height={100} src={Profile} alt="프로필" />
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-bold">모태환 님의 블로그</h3>
        <span className="text-[12px]">모태환 님의 블로그 입니다</span>
      </div>
    </div>
  );
}
