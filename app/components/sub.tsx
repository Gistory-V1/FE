import Image from "next/image";
import Plus from "../svg/plus.svg";

export default function Sub() {
  return (
    <div className="flex justify-between items-center w-[420px] rounded-md p-4 bg-gray4">
      <div className="flex  gap-2 flex-col">
        <h3 className="text-20 font-bold">{"배경진"}</h3>
        <span className="text-gray3 text-[12px]">✅ 구독자 {3}명</span>
      </div>
      <button className="gap-1 border border-black1 text-[14px] py-2 px-3 rounded-2xl flex items-center justify-center">
        <Image src={Plus} alt="구독" />
        구독
      </button>
    </div>
  );
}
