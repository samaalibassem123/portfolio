import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-10">
      <div className="border rounded-4xl p-6 flex items-center justify-between w-[500px]">
        <Link href={""}>Home</Link>
        <Link href={""}>Experience</Link>
        <Link href={""}>Skills</Link>
      </div>
    </header>
  );
}
