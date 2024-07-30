import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook connect with your friend",
  description: "Facebook is social utility that connects people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
