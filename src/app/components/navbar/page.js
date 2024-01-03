"use client";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Fixtures",
      link: "fixtures",
    },
    {
      id: 3,
      title: "Table",
      link: "/",
    },
    {
      id: 4,
      title: "News",
      link: "/",
    },
  ];

  return (
    <nav className="fixed flex items-center justify-between w-full h-16 p-4 text-white bg-blue-900">
      <h1 className="text-4xl duration-200 cursor-pointer hover:text-yellow-400">
        LUFC Hero
      </h1>

      <ul className="hidden md:flex">
        {links.map(({ id, title, link }) => (
          <a
            key={id}
            href={link}
            className="mx-2 text-xl duration-200 hover:text-yellow-400"
          >
            {title}
          </a>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-40 text-white cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-screen bg-blue-900 animate-flip-down animate-ease-in animate-duration-[400ms]">
          {links.map(({ id, title, link }) => (
            <li
              key={id}
              className="my-4 text-4xl animate-fade animate-delay-500 animate-ease-in"
            >
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
