"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import Black from "../components/black";
import { useRouter } from "next/router";
import axios from "axios";
import { url } from "../../config";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    axios.get(`${url}/post/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, []);
  function send() {
    axios.put(`${url}/edit`, {
      postId: id,
      title: title,
      content: content,
    });
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border-b w-2/3 text-[32px] py-8"
          placeholder="제목을 입력하세요"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="py-6 focus:outline-none border-none h-[400px] w-2/3  border rounded resize-none overflow-hidden"
          placeholder="여러분들의 생각을 적어보세요"
        />
        <Black label="작성" onClick={send} />
      </div>
    </div>
  );
}
