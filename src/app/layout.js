import Header from "../components/Header";
import Footer from "../components/Footer";
import './globals.css';  // must be imported in root layout


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
