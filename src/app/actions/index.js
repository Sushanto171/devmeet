
'use server'

import { signIn, signOut } from "@/lib/auth";

export async function doSocialLogin(actionFromButton) {
    const action = actionFromButton;
    await signIn(action, { redirectTo: "/dashboard" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}




export async function doCredentialLogin(formData) {
  console.log("formData", formData);

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response.error) {
      console.error(response.error);
      throw new Error(response.error);
    }

    return response;
  } catch (err) {
    console.error(err);
    throw new Error("An error occurred while logging in.");
  }
}
