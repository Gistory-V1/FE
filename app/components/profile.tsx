import Image from "next/image";
import ProfileImage from "../svg/logo.svg";

export default function Profile() {
  return (
    <div className="flex flex-col items-start p-4">
      <div className="flex gap-2 items-center justify-center mb-3">
        <Image width={50} height={50} src={ProfileImage} alt="프로필" />
        <div>
          <h3 className="text-lg font-bold mb-1 mt-4">모태환 님의 블로그</h3>
          <div className="mb-4">
            <span className="text-gray-600">구독자 </span>
            <span className="font-semibold">0명</span>
          </div>
        </div>
      </div>
      <div
        style={{ border: "1px solid" }}
        className="border-solid gap-4 flex  items-center rounded-lg px-8 py-4"
      >
        <span className="font-bold cursor-pointer">글쓰기</span>
        <div className="h-5 mx-6 text-gray-400">|</div>
        <span className="font-bold cursor-pointer">내 블로그</span>
        <div className="h-5 mx-6 text-gray-400">|</div>
        <span className="font-bold cursor-pointer"> 관리 </span>
      </div>
      <div
        style={{ borderBottom: "1px solid #111111" }}
        className=" flex my-8 justify-between w-full"
      >
        <span className="">조회수</span>
        <span className="mb-8 font-bold">0회</span>
      </div>
    </div>
  );
}
