import { User } from "@/model/user-model";



export async function createUser(user) {
  try {
    // trying to push a role if not defined 
    if (!user.role) {
      user.role = "user";
    }
    await User.create(user);
    console.log('user from quires');
    console.log(user);
  } catch (e) {
    throw new Error(e);
  }
}
