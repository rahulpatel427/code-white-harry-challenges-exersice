import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook connect with the word",
  description: "Connect with the word using Facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container min-h-[85vh] mx-auto">

          {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
