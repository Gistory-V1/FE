import Image from "next/image";
import TextLogo from "../svg/textlogo.svg";
import Logo from "../svg/logo.svg";
import Search from "../svg/search.svg";

export default function Header() {
  return (
    <header className="py-6 border-b-black border items-center flex justify-between px-[60px] focus:outline-none">
      <div className="flex border gap-8">
        <Image src={TextLogo} alt="로고" />
        <Image className="absolute left-48 top-8" src={Search} alt="검색" />
        <input
          placeholder="지스토리에 검색"
          type="text"
          className="rounded-lg py-2 px-10 w-[560px] border border-color-gray2 focus:outline-none"
        />
      </div>
      <Image src={Logo} alt="로고" />
    </header>
  );
}
