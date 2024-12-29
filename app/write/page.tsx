"use client";
import { useRef, useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { url } from "../../config";
import { useRouter } from "next/navigation";
import Black from "../components/black";

export default function WritePage() {
  const router = useRouter();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const [token, setToken] = useState<string | null>(null);

  // 브라우저 환경에서만 `localStorage` 접근
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  console.log(token);
  async function sendPost() {
    if (title.current?.value === "" || content.current?.value === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    }
    try {
      await axios.post(
        `${url}/post/create`,
        {
          title: title.current?.value,
          content: content.current?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
          className="py-6 focus:outline-none border-none h-[400px] w-2/3 border rounded resize-none overflow-hidden"
          placeholder="여러분들의 생각을 적어보세요"
        />

        <Black label="작성" onClick={sendPost} />
      </div>
    </div>
  );
}
