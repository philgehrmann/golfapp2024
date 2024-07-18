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
    <main className="grid items-center justify-items-center h-[100vh]">
        <Loginform />

    </main>
  );
}
