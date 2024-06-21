"use client";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "../../components/Header";
import { Button } from "@nextui-org/button";
import Golfclubs from "../../components/Golfclubs";
import { useState } from "react";

export default async function Account() {
  const supabase = createClient();
  const [hancidap, setHandicap] = useState("");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) {
    redirect("/");
    setHandicap(user.handicap);
  }

  return (
    <div>
      <div className="grid grid-cols-[300px_1fr]">
        <Header user={user} />
        <div>
          <div className="grid grid-cols-[33%_33%_31%] w-full p-6 mt-4 gap-6">
            <div className="p-6 bg-white/50 rounded-xl">
              <p className="headline pb-6 border-b-1 text-[14px] uppercase text-black/50 border-white/50 font-bold">
                Dein aktuelles Hancidap
              </p>
              <p className="text-[92px] text-center py-12 font-bold"> 19,8</p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl">
              {" "}
              <p className="headline pb-6 border-b-1 text-[14px] uppercase text-black/50 border-white/50 font-bold">
                Beste Runden
              </p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl">
              {" "}
              <p className="headline pb-6 border-b-1 text-[14px] uppercase text-black/50 border-white/50 font-bold">
                Deine Runden
              </p>
            </div>
          </div>
          <div className="frame grid w-[97%] p-6 bg-white/50 rounded-xl gap-12 mr-6 ml-6">
            <p className="headline pb-6 border-b-1 text-[14px] uppercase text-black/50 border-white/50 font-bold">
              Deine Übersicht
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
