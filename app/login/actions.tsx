"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();
  console.log(formData);
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  console.log(error)
  if (error) {
    console.log(error);
  } else {
    console.log("hier")
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function logout() {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect("/");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

