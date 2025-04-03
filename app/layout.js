import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "The Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-theme">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
