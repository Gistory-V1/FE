"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../app/globals.css";
import Header from "./components/header";
import { url } from "../config";
import Sub, { SubProps } from "./components/sub";
import Lank, { postLankProps } from "./components/lank";
import Profile from "./components/profile";
import LoginOption from "./components/loginOption";

interface ProfileData {
  name: string;
  userId: number;
  subCount: string;
  views: string;
}

export default function Home() {
  const [lankPosts, setLankPosts] = useState<postLankProps[]>([]);
  const [subPosts, setSubPosts] = useState<SubProps[]>([]);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  function getProfile() {
    axios
      .get(`${url}/profile?name=${localStorage.getItem("myName")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      });
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    const fetchLankPosts = async () => {
      try {
        const response = await axios.get(`${url}/rank-views`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setLankPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSubPosts = async () => {
      try {
        const response = await axios.get(`${url}/rank-subs`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setSubPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLankPosts();
    fetchSubPosts();
    getProfile();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex px-6">
        <div className="flex flex-col gap-5 w-2/3">
          {lankPosts.map((post) => (
            <Lank key={post.rank} post={post} />
          ))}
        </div>
        <div
          className="flex flex-col items-left border-l pl-10 h-full border-l-gray1"
          style={{ borderLeft: "1px solid #868686" }}
        >
          {!token ? <LoginOption /> : <Profile Profile={profile} />}
          <div className="mt-2 flex flex-col gap-5">
            <h2 className="font-extrabold text-[20px]">구독자 왕👑</h2>
            {subPosts.map((post) => (
              <Sub key={post.rank} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
