"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Button from "../components/button";
import Logo from "../svg/textlogo.svg";
import axios from "axios";
import { url } from "../../config";
import { useRouter } from "next/navigation";

interface SignUpFormInputs {
  email: string;
  password: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    axios
      .post(`${url}/auth/signup`, {
        email: data.email,
        password: data.password,
      })
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Image src={Logo} alt="logo" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              className="border rounded-md px-4 py-2"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gsm\.hs\.rk$/,
                  message: "학교 이메일만 사용 가능합니다.",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              className="border rounded-md px-4 py-2"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/,
                  message: "1개 이상 특수문자를 포함 8자 이상 12자 이내",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button label="회원가입" />
        </form>
      </div>
    </div>
  );
}
