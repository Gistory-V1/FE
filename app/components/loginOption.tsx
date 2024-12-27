import { useRouter } from "next/navigation";
import Button from "../components/button";

export default function LoginOption() {
  const route = useRouter();
  return (
    <div className="flex flex-col my-8">
      <h4 className="text-xs text-left">
        gistory에 로그인하여 블로그를 즐겨보아요
      </h4>
      <Button onClick={() => route.push("/login")} label="로그인" />
      <Button onClick={() => route.push("/sign-up")} label="회원가입" />
    </div>
  );
}
