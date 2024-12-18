import Button from "../components/button";
import Header from "../components/header";
import SimpleProfile from "../components/simpleProfile";

export default function BlogPage() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5">
          <div className="w-2/3">
            <h1>모태환 님의 블로그</h1>
            <h3>전체 글</h3>
          </div>
          <div className="flex">
            <SimpleProfile />
            <button>구독하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
