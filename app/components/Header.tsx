"use client";
import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import { type User } from "@supabase/supabase-js";

export default function Header({ user }: { user: User | null }) {
  const [username, setUsername] = useState("");

  return (
    <header className="grid grid-cols-2 lg:grid-cols-[10%_80%_10%] py-6 px-6 border-b-[1px] border-tuerkis bg-white shadow-sm">
      <div>logo</div>
      <div className="hidden lg:block self-center justify-self-center">
        navi
      </div>
      <div className="justify-self-end self-end grid grid-cols-2">
        {" "}
        <span className="self-center">Hallo, {username}</span>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="md"
          className="ml-4"
        />
      </div>
    </header>
  );
}
