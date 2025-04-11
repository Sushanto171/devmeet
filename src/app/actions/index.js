
'use server'

import { signIn, signOut } from "@/lib/auth";

export async function doSocialLogin(actionFromButton) {
    const action = actionFromButton;
    await signIn(action, { redirectTo: "/dashboard" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}