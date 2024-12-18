import axios from "axios";
import { url } from "../../config";
import { useRouter } from "next/navigation";

export default function PopUp() {
  const route = useRouter();
  function Logout() {
    axios
      .post(`${url}/auth/logout`)
      .then(() => {
        route.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function Delete() {
    axios
      .delete(`${url}/auth/delete`)
      .then(() => {
        route.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div>
        <h4>모태환</h4>
        <span>s24023@gsm.hs.kr</span>
      </div>
      <ul className="flex gap-2" style={{ borderTop: "1px solid #A6A6A6" }}>
        <li onClick={Logout}>로그아웃</li>
        <li>|</li>
        <li onClick={Delete}>회원탈퇴</li>
      </ul>
    </div>
  );
}
