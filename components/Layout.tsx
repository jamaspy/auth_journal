import React from "react";
import Header from "./Header";
const Layout = ({ session, children }) => {
  return (
    <div className="container mx-auto flex flex-col justify-between min-h-screen px-2">
      <div className="">
        <Header session={session} />
        {children}
      </div>
      <footer className="w-full flex items-center justify-center p-4 bg-theme-yellow mb-4 rounded-bl-lg rounded-br-lg">
        <p className="text-xl text-white">journal.io</p>
      </footer>
    </div>
  );
};

export default Layout;
