"use client";
import { useRef } from "react";
import Header from "../components/header";
import axios from "axios";
import { url } from "../../config";
import { useRouter } from "next/navigation";

export default function writePage() {
  const router = useRouter();
  let title = useRef<HTMLInputElement>(null);
  let content = useRef<HTMLTextAreaElement>(null);

  async function sendPost() {
    if (title.current?.value === "" || content.current?.value === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    }
    try {
      await axios.post(`${url}/post`, {
        title: title.current?.value,
        content: content.current?.value,
      });
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <input
          ref={title}
          type="text"
          className="border-b w-2/3 text-[32px] py-8"
          placeholder="제목을 입력하세요"
        />
        <textarea
          ref={content}
          className="py-6 focus:outline-none border-none h-[400px] w-2/3  border rounded resize-none overflow-hidden"
          placeholder="여러분들의 생각을 적어보세요"
        />

        <button
          onClick={sendPost}
          className="m-10 text-white bg-black1 rounded-3xl px-6 py-3"
        >
          완료
        </button>
      </div>
    </div>
  );
}