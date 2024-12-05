import Cart from "@/components/Cart/Cart";
import Header from "@/components/header/Header";
import Footer from "@/containers/Footer";
import { CartContextProvider } from "@/contexts/CartContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniro eCommerce",
  description: "Created by Youssef El Sayed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <CartContextProvider>
          <Header />
          <Cart />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
