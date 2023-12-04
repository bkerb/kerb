import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Sidenav } from "@/components/sidenav";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kerb",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-muted`}>
        <Sidenav />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
