import Image from "next/image";
import TextLogo from "../svg/textlogo.svg";
import Logo from "../svg/logo.svg";
import Search from "../svg/search.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header
      style={{ borderBottom: "1px solid #868686" }}
      className="py-6 items-center flex justify-between px-[60px] focus:outline-none"
    >
      <div className="flex border gap-8">
        <Image
          src={TextLogo}
          alt="로고"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <Image
          className="absolute left-48 top-8 cursor-pointer"
          src={Search}
          alt="검색"
        />
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
