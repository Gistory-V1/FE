"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import Black from "../components/black";
import { useRouter } from "next/navigation";
import axios from "axios";
import { url } from "../../config";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedId = localStorage.getItem("postId");
    if (storedId) {
      setId(storedId);
      localStorage.removeItem("postId");
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/post?postId=${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.content);
        })
        .catch((err) => {
          console.error("데이터 로딩 실패", err);
        });
    }
  }, [id]);

  function send() {
    if (id) {
      axios
        .post(
          `${url}/post/update?postId=${id}`,
          {
            postId: Number(id),
            title: title,
            content: content,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log("수정되었습니다", res);
          router.push(`/post/${id}`);
        })
        .catch((err) => {
          console.error("수정 실패", err);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border-b w-2/3 text-[32px] py-8"
          placeholder="제목을 입력하세요"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="py-6 focus:outline-none border-none h-[400px] w-2/3 border rounded resize-none overflow-hidden"
          placeholder="여러분들의 생각을 적어보세요"
        />
        <Black label="수정" onClick={send} />
      </div>
    </div>
  );
}
