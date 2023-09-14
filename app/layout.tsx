import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "The Amazon Web Scraper",
  description: "Scraping the unscrapable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#f7fbff] h-screen">
        <ClientProvider>
          {/**Sidebar */}
          <Sidebar />
          <main
            className="p-10 max-w-7xl w-full 
        overflow-y-auto mx-auto"
          >
            {/**Header */}
            <Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
