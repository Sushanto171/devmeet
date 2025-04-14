const users = [
    {
      email: "a@email.com",
      password: "password"
    },
    {
      email: "b@email.com",
      password: "password"
    },
    {
      email: "c@email.com",
      password: "password"
    }
  ]
  
  export const getUserByEmail = (email) => {
    const found = users.find(user => user.email === email);
    console.log('User found:', found); // Log the found user
    return found;
  };
  