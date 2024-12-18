import "../app/globals.css";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-2/3">
        <div></div>
        <div className="flex columns border-l border-l-gray-300">
          <h4>gistory에 로그인하여 블로그를 즐겨보아요</h4>
          <button></button>
        </div>
      </div>
    </div>
  );
}
