"use client";

import Image from "next/image";
import Heart from "../svg/heart.svg";
import fill from "../svg/fillHeart.svg";
import Option from "../svg/option.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../config";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface PostOptionsProps {
  postId?: number;
  Like: any;
  author: string;
}

export default function PostOptions({
  postId,
  Like,
  author,
}: PostOptionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [option, setOption] = useState(false);
  const [count, setCount] = useState(0);
  const [admin, setAdmin] = useState(false);
  const params = useParams();

  const route = useRouter();

  useEffect(() => {
    setCount(Like);
    setAdmin(localStorage.getItem("myName") == author ? true : false);
  }, []);

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
      .delete(`${url}/post/like/cancel?postId=${params.id}`, {
        data: {
          likeClick: false,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
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
        className="flex justify-between items-center rounded-2xl px-2 mt-4 py-1 w-[10%]"
      >
        <div className="flex items-center">
          {!isLiked ? (
            <Image src={Heart} alt="빈 하트" onClick={like} />
          ) : (
            <Image src={fill} alt="하트" onClick={cancel} />
          )}
          <span>{count}</span>
        </div>
        {admin ? (
          <Image src={Option} alt="옵션" onClick={() => setOption(!option)} />
        ) : (
          <button>구독</button>
        )}
      </div>
      <ul className={`w-1/5 ${option ? "block" : "hidden"}`}>
        <li
          onClick={() => {
            localStorage.setItem("postId", postId ? postId.toString() : "");
            route.push(`/editBlog`);
          }}
          style={{ borderBottom: "1px solid #A6A6A6" }}
        >
          수정
        </li>
        <li
          onClick={() => {
            axios
              .delete(`${url}/post/delete?postId=${postId}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res) => {
                route.back();
              });
          }}
        >
          삭제
        </li>
      </ul>
    </div>
  );
}
