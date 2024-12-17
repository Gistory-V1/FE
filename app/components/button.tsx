import React from "react";

export default function Button({ label }: { label: string }) {
  return (
    <button className=" px-4 border-gray-100 py-2 rounded">{label}</button>
  );
}
