import React from "react";

export default function Button({ label }: { label: string }) {
  return (
    <button className="w-[400px] mt-6 py-3 border text-black1 border-black1 rounded">
      {label}
    </button>
  );
}
