import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function Layouts({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
