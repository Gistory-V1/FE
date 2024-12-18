import Header from "../components/header";

export default function writePage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          className="border-b w-2/3 text-[32px] py-8"
          placeholder="제목을 입력하세요"
        />
        <textarea
          className="py-6 focus:outline-none border-none h-[400px] w-2/3  border rounded resize-none overflow-hidden"
          placeholder="여러분들의 생각을 적어보세요"
        />

        <button className="m-10 text-white bg-black1 rounded-3xl px-6 py-3">
          완료
        </button>
      </div>
    </div>
  );
}
