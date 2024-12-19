"use client";

import Header from "../components/header";
import Black from "../components/black";
import { useRef } from "react";

export default function EditPage() {
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
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

        <Black label="작성" />
      </div>
    </div>
  );
}
