import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "../components/Header";
import { Button } from "@nextui-org/button";
import Golfclubs from "../components/Sticks";

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
            <div className="grid grid-cols-[300px_30%_30%]">
      <Header user={user} />
        <div className="m-6">
          <Golfclubs user={user} />
        </div>
        <div className="m-6">Deine Turniere</div>
      </div>
    </div>
  );
}
