/**
 * Root Layout
 */

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// The FormData context is used to share form data across app pages
import { FormDataContextProvider } from "../contexts/FormDataContext";

// Import and initialize Inter font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap", adjustFontFallback: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={`${inter.className} container w-screen flex flex-col h-screen justify-between`}>
          <div>
            <Header />
            <FormDataContextProvider>{children}</FormDataContextProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
