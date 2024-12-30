"use client";

import Image from "next/image";
import Heart from "../svg/heart.svg";
import fill from "../svg/fillHeart.svg";
import Option from "../svg/option.svg";
import { useState } from "react";
import axios from "axios";
import { url } from "../../config";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface PostOptionsProps {
  postId?: number;
}

export default function PostOptions({ postId }: PostOptionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [option, setOption] = useState(false);
  const [count, setCount] = useState(0);
  const params = useParams();

  const route = useRouter();

  function like() {
    setCount(count + 1);
    setIsLiked(true);
    axios
      .post(
        `${url}/post/like?postId=${params.id}`,
        {
          likeClick: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setCount(res.data.likeCount);
      })
      .catch((err) => {
        setCount(count - 1);
        setIsLiked(false);
        console.log(err);
      });
  }

  function cancel() {
    setCount(count - 1);
    setIsLiked(false);
    axios
      .delete(`${url}/like`)
      .then((res) => {
        setCount(res.data.likeCount);
      })
      .catch((err) => {
        console.log(err);
        setCount(count + 1);
        setIsLiked(true);
      });
  }

  return (
    <div>
      <div
        style={{ border: "1px solid #A6A6A6" }}
        className="flex justify-between items-center rounded-2xl px-2 mt-4 py-1 w-[100px]"
      >
        <div className="flex items-center">
          {!isLiked ? (
            <Image src={Heart} alt="빈 하트" onClick={like} />
          ) : (
            <Image src={fill} alt="하트" onClick={cancel} />
          )}
          <span>{count}</span>
        </div>
        <Image src={Option} alt="옵션" onClick={() => setOption(!option)} />
      </div>
      {option && (
        <ul className="">
          <li
            onClick={() => {
              localStorage.setItem("postId", postId ? postId.toString() : "");
              route.push(`/postEdit`);
            }}
            style={{ borderBottom: "1px solid #A6A6A6" }}
          >
            수정
          </li>
          <li>삭제</li>
        </ul>
      )}
    </div>
  );
}
