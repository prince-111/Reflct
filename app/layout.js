import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reflect",
  description: "A Journaling App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
        <Header />
        <main className="min-h-screen">{children}</main>

        <footer className="bg-orange-300 py-6 bg-opacity-10">
          <div className="container mx-auto px-4 text-center text-gray-900">
            <p>Made with 💗 by Prince</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
