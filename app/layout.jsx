import { Montserrat, } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";


const font = Montserrat ({
  subsets: ["latin"],
  weight: ['100','200', '300', '400', '500', '600', '700', '800',]
});

export const metadata = {
  title: "Dinga's portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#1c1c22] text-white`}
      >
        <CursorGlow />
       <SmoothScroll />
       <Header />
       <PageTransition>
          {children}
       </PageTransition>
       <Footer/>
      </body>
    </html>
  );
}
