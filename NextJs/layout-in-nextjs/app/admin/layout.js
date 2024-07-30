import { Inter } from "next/font/google";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook connect with your friend",
  description: "Facebook is social utility that connects people",
};

export default function AdminLayout({ children }) {
  return (

    <>
      <h1>Admin Navbar</h1>
      {children}
    </>


  );
}
