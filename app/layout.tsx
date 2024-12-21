import Cart from "@/components/Cart/Cart";
import Header from "@/components/header/Header";
import Footer from "@/containers/Footer";
import { CartContextProvider } from "@/contexts/CartContext";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName="bg-green-500 text-white font-bold rounded-lg shadow-lg p-4"
          />
          ;
        </CartContextProvider>
      </body>
    </html>
  );
}
