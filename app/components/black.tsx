import React from "react";

interface BlackButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Black({ label, onClick }: BlackButtonProps) {
  return (
    <button
      className="m-10 text-white bg-black1 rounded-3xl px-6 py-3"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
