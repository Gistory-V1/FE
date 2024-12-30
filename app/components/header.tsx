import Image from "next/image";
import TextLogo from "../svg/textlogo.svg";
import Logo from "../svg/logo.svg";
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
      </div>
      <Image src={Logo} alt="로고" />
    </header>
  );
}
