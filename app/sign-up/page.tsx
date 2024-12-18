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
  confirmPassword: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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

  const password = watch("password");

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        style={{ border: "1px solid #A6A6A6" }}
        className=" flex flex-col items-center gap-20 rounded-lg py-12 px-10"
      >
        <Image width={180} height={50} src={Logo} alt="logo" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 items-center"
        >
          <div className="flex flex-col gap-2">
            <label
              className={errors.email?.message && "text-red-500"}
              htmlFor="email"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.email ? "text-red-500" : ""
              }`}
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gsm\.hs\.kr$/,
                  message: "학교 이메일만 사용 가능합니다.",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-[12px]">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={errors.password?.message && "text-red-500"}
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.password ? "text-red-500" : ""
              }`}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/,
                  message: "1개 이상 특수문자를 포함 8자 이상 12자 이내",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-[12px]">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={errors.confirmPassword?.message && "text-red-500"}
              htmlFor="confirmPassword"
            >
              비밀번호 재입력
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.confirmPassword ? "text-red-500" : ""
              }`}
              {...register("confirmPassword", {
                required: "비밀번호를 확인해주세요.",
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-[12px]">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button label="회원가입" />
        </form>
      </div>
    </div>
  );
}
