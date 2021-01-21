import Footer from "./footer/Footer";
import Navbar from "./newNavbar/Navbar";

export default function Layouts({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
