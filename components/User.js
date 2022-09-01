import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
          className="h-10 w-10 rounded-full 
          bg-gray-200 cursor-pointer p-1
          hover:shadow-md"
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-6 py-2 
      font-medium rounded-md hover:brightness-105
      hover:shadow-md"
      >
        Sign in
      </button>
    </>
  );
};

export default User;
