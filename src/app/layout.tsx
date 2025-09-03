import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio Balya",
  description: "Website pribadi Balya",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="main-header">
          <h1>Halo, Aku Balya</h1>
          <p>Siswa | -1 Device</p>
        </header>

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
