import React from "react";
import { signOut, signIn } from "next-auth/react";
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";

const Header = ({ session }) => {
  if (session) {
    const { user } = session;
    return (
      <header className="w-full flex flex-row items-center justify-between p-2 bg-theme-yellow mt-4 rounded-tl-lg rounded-tr-lg">
        <div className="">
          {user?.image && (
            <img
              src={user?.image}
              alt="profile"
              width="50px"
              className="rounded-full shadow-lg"
            />
          )}
        </div>

        <button onClick={() => signOut()} className="text-3xl text-theme-blue">
          <HiOutlineLogout />
        </button>
      </header>
    );
  }
  return (
    <header className="w-full flex flex-row items-center justify-between p-2 bg-theme-yellow mt-4 rounded-tl-lg rounded-tr-lg">
      <img
        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-glasses-outline-512.png"
        alt="profile"
        width="50px"
      />
      <button
        onClick={() => signIn()}
        className="text-3xl text-theme-blue hover:text-theme-orange"
      >
        <HiOutlineLogin />
      </button>
    </header>
  );
};

export default Header;
