export default function Profile() {
  return (
    <div className="flex flex-col items-start p-4">
      <h3 className="text-lg font-bold mb-2">모태환 님의 블로그</h3>
      <div className="mb-4">
        <span className="text-gray-600">구독자 </span>
        <span className="font-semibold">0명</span>
      </div>
      <div className="border-solid flex items-center borders rounded-lg px-6 py-3">
        <span className="font-bold cursor-pointer">글쓰기</span>
        <div className="h-5 mx-6 text-gray-400">|</div>
        <span className="font-bold cursor-pointer">내 블로그</span>
        <div className="h-5 mx-6 text-gray-400">|</div>
        <span className="font-bold cursor-pointer">관리</span>
      </div>
      <div>
        <span>조회수</span>
        <span>0회</span>
      </div>
    </div>
  );
}
