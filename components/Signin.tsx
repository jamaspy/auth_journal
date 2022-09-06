import React from "react";
import { signOut, signIn } from "next-auth/react";
import Image from "next/image";
const Signin = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-5xl text-center font-black mt-12">
        Welcome to your journal
      </h1>
      <h1 className="text-3xl text-center font-bold mt-4">Sign in to begin</h1>
      <div className="w-full">
        <Image
          src="/reading.svg"
          layout="responsive"
          width={300}
          height={300}
          alt="reading"
        />
      </div>

      <button
        onClick={() => signIn()}
        className="mt-4 py-4 px-8 rounded-lg transition-all ease-in-out duration-200 hover:bg-theme-yellow bg-theme-blue text-2xl font-semibold text-white shadow-sm"
      >
        Sign In
      </button>
    </div>
  );
};

export default Signin;
