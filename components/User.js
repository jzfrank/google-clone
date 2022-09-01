import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = ({ className }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
          className={`h-10 w-10 rounded-full 
          bg-gray-100 cursor-pointer p-1
          hover:shadow-md
          ${className}
          `}
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={signIn}
        className={`bg-blue-500 text-white px-6 py-2 
      font-medium rounded-md hover:brightness-105
      hover:shadow-md ${className}`}
      >
        Sign in
      </button>
    </>
  );
};

export default User;
