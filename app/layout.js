import { Inter } from "next/font/google";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "deandivizio.com",
  description: "My portfolio and blog site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}> 
      <GoogleAnalytics gaId="G-B4LMP9JX7Y" />
        <Navigation />
        <main className="w-[100vw] min-h-[100vh]">
          {children}
        </main>
        <Background />
        </body>
    </html>
  );
}
