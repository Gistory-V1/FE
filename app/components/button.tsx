import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[400px] mt-6 py-3 border text-black1 border-black1 rounded"
    >
      {label}
    </button>
  );
}
