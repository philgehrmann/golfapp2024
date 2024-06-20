import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Home() {
  console.log("HOME");
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user !== null) {
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      asdasd
    </main>
  );
}
