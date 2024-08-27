import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Foter from "@/components/shared/Foter";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing centre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">

      <body className={inter.className}>
        <AuthProvider>
          <Navbar></Navbar>
          {children}
          <Foter></Foter>
        </AuthProvider>
      </body>

    </html>
  );
}
