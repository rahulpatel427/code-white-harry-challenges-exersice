import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook- Connect to Virtual World",
  description: "Facebook- Connect to World peoples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
