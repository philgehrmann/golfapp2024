import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "../components/Header";
import { Button } from "@nextui-org/button";

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
    </div>
  );
}
