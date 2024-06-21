import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Loginform from "./components/Loginform";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user !== null) {
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
  return (
    <main className="grid grid-cols-2 min-h-screen flex-col items-center justify-between ">
      <div className="bg-gradient-to-r from-green to-lightgreen h-full w-full item-center grid items-center  drop-shadow-md ">
        <Loginform />
      </div>
      <div className="">b</div>
    </main>
  );
}
