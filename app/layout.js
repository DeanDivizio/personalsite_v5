import { Inter } from "next/font/google";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import { TransitionProvider } from "../contexts/TransitionContext"
import "./globals.css";
import Footer from "../components/Footer";

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
        <TransitionProvider>
        <Navigation />
        <main className="w-[100vw] min-h-[98vh]">
          {children}
        </main>
        <Footer />
        <Background />
        </TransitionProvider>
        </body>
    </html>
  );
}
