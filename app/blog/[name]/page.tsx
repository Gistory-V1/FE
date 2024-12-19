import { useParams } from "next/navigation";
import Header from "../../components/header";
import Post from "../../components/post";
import SimpleProfile from "../../components/simpleProfile";

export default function BlogPage() {
  const params = useParams();
  const name = Array.isArray(params.name)
    ? params.name[0]
    : params.name || "알 수 없음";

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5 flex">
          <div className="w-2/3 flex flex-col gap-8">
            <h1 className="font-bold text-[26px] mt-8">{name} 님의 블로그</h1>
            <div
              style={{ borderBottom: "1px solid #A6A6A6" }}
              className="flex font-bold text-[20px] pb-6 w-[650px]"
            >
              <h3>전체 글 </h3>
              <h3 className="text-red-600"> 1</h3>
            </div>
            <Post post={example} />
          </div>
          <SimpleProfile name={name} />
        </div>
      </div>
    </div>
  );
}

const example = {
  postId: 1,
  title: "dps",
  author: "skdi",
  view: 2,
  createdAt: "23시간 전",
  sub: 3,
  like: 3,
};
