const useUsers = async () => {
  const data = await fetch("http:localhost:3000/api/users");
  const users = await data.json()
return users
};

export default useUsers;
