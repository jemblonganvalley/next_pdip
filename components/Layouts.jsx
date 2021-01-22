import Footer from "./footer/Footer";
import Navbar from "./newNavbarRedirect/Navbar";

export default function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <div
        className="App"
        style={{
          marginTop: "9vh",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
