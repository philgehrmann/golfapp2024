import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "../../components/Header";
import { Button } from "@nextui-org/button";
import Golfclubs from "../../components/Sticks";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) {
    redirect("/");
  }

  return (
    <div>
      <Header user={user} />
      <div className="grid grid-cols-[40%_30%_30%]">
        <div></div>
        <div className="m-6"></div>
        <div className="m-6">Deine Turniere</div>
      </div>
    </div>
  );
}
