import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Number 1 Leeds United Fanpage",
  description: "The best place for all Leeds United news.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
