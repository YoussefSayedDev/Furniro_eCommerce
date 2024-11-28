import Cart from "@/components/Cart";
import Header from "@/components/header/Header";
import Footer from "@/containers/Footer";
import { CartProvider } from "@/contexts/CartContext";
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
    <CartProvider>
      <html lang="en">
        <body className="relative overflow-x-hidden">
          <Header />
          <Cart />
          {children}
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
