import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Notifications } from "@/components/Notifications";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jet-test",
  description:
    "Aplicaçao desenvolvida para gerenciar operadores e seus clientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="w-full min-h-screen flex flex-col ">
          <Header />
          <main
            className=" grow px-3 flex items-center justify-center bg-gradient-to-r 
          from-green-500 via-cyan-500 to-blue-500"
          >
            {children}
          </main>
          <Footer />
        </div>
        <Notifications />
      </body>
    </html>
  );
}
