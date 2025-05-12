import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="flex flex-auto items-center justify-between mx-auto p-4">
        <Home />
        <Tbd />
        <Nav />
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <div>
        <a href="/">website</a>
      </div>
    </>
  );
}

function Tbd() {
  return (
    <>
      <div></div>
    </>
  );
}

function Nav() {
  return (
    <>
      <div>
        <a href="/login">login</a>
      </div>
    </>
  );
}
