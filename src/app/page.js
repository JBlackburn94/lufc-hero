import Hero from "/Users/jasonblackburn/Desktop/Code/lufchero/lufc-hero/public/hero-image.webp";
import Badge from "/Users/jasonblackburn/Desktop/Code/lufchero/lufc-hero/public/Leeds_United_F.C._logo.svg.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      <div className="flex items-center mt-8 justify-evenly">
        <Image
          src={Hero}
          alt="A picture taken by Samuel Ryde of a Leeds United mural with the words, United We Stand"
          className="hidden w-1/4 rounded-lg shadow-xl lg:block"
        />
        <div className="flex flex-col items-center w-3/4 md:w-1/2">
          <span className="flex flex-col items-center w-full p-8 mb-2 text-white bg-blue-900 rounded-lg shadow-lg">
            <Image
              src={Badge}
              alt="An image of the Leeds United Badge"
              className="w-40"
            />
            <h2 className="text-2xl">Welcome to LUFC Hero</h2>
            <p className="text-center">
              The #1 Place to get all your Leeds United news and fixtures
            </p>
          </span>
          <span className="flex items-center justify-center w-full p-8 mt-4 text-white bg-blue-900 rounded-lg shadow-lg">
            <a
              href="#"
              className="p-2 mx-4 text-center text-black duration-200 bg-yellow-400 rounded hover:bg-white hover:text-blue-800"
            >
              LUFC Store
            </a>
            <a
              href="#"
              className="p-2 mx-4 text-center text-black duration-200 bg-yellow-400 rounded hover:bg-white hover:text-blue-800"
            >
              LUFC Store
            </a>
            <a
              href="#"
              className="p-2 mx-4 text-center text-black duration-200 bg-yellow-400 rounded hover:bg-white hover:text-blue-800"
            >
              LUFC Store
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
