import Image from "next/image";
import ProfileImage from "../svg/logo.svg";
import { useRouter } from "next/navigation";

interface ProfileData {
  name: string;
  userId: number;
  subCount: string;
  views: string;
}

export default function Profile({ Profile }: { Profile: ProfileData | null }) {
  const route = useRouter();
  return (
    <div className="flex flex-col items-start p-4">
      <div className="flex gap-2 items-center justify-center mb-3">
        <Image width={50} height={50} src={ProfileImage} alt="프로필" />
        <div>
          <h3 className="text-lg font-bold mb-1 mt-4">
            {Profile?.name} 님의 블로그
          </h3>
          <div className="mb-4">
            <span className="text-gray-600">구독자 </span>
            <span className="font-semibold">{Profile?.subCount}명</span>
          </div>
        </div>
      </div>
      <div
        style={{ border: "1px solid" }}
        className="border-solid gap-4 flex items-center rounded-lg px-8 py-4"
      >
        <span
          onClick={() => route.push("/write")}
          className="font-bold cursor-pointer"
        >
          글쓰기
        </span>
        <div className="h-5 mx-6 text-gray-400">|</div>
        <span
          onClick={() => route.push(`/blog/${Profile?.name}`)}
          className="font-bold cursor-pointer"
        >
          내 블로그
        </span>
        <div className="h-5 mx-6 text-gray-400">|</div>
        <span
          onClick={() => {
            localStorage.removeItem("token");
            route.push("/login");
          }}
          className="font-bold cursor-pointer"
        >
          {" "}
          로그아웃{" "}
        </span>
      </div>
      <div
        style={{ borderBottom: "1px solid #111111" }}
        className="flex my-8 justify-between w-full"
      >
        <span>조회수</span>
        <span className="mb-8 font-bold">{Profile?.views}회</span>
      </div>
    </div>
  );
}
