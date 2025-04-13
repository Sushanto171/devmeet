"use client"; 

import { useSession, signOut } from "next-auth/react";

const MyProfile = () => {
  const { data: session, status } = useSession();

  // Handle loading and error states
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>You need to be signed in to view your profile.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="mb-4">
          <strong>Name: </strong>
          <span>{session.user.name}</span>
        </div>
        <div className="mb-4">
          <strong>Email: </strong>
          <span>{session.user.email}</span>
        </div>
        <div className="mb-4">
          <strong>Image: </strong>
          {session.user.image && (
            <img
              src={session.user.image}
              alt="User Image"
              className="rounded-full w-24 h-24"
            />
          )}
        </div>

        <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
