import SimpleProfile from "../../components/simpleProfile";
import Header from "../../components/header";
import PostOptions from "../../components/postOptions";

export default function Post() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5">
          <div className="w-2/3">
            <h1>제목입니다다</h1>
            <p>내용입니다다다다다다</p>
            <PostOptions />
          </div>
          <div>
            <SimpleProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
