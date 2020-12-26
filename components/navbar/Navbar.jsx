import styles from "./Navbar.module.css";
import Link from "next/link";
import Icon, { FontAwesome } from "react-web-vector-icons";
import AuthBoard from "../authboard/AuthBoard";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowLogin(false);
      setShowRegister(false);
    });
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <h3 className={styles.brand}>ANDI APPs</h3>
        <ul className={styles.menu}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li
            onClick={() => {
              setShowLogin(false);
              setShowRegister(!showRegister);
            }}
          >
            <FontAwesome
              name="tasks"
              color="orange"
              size={15}
              style={{
                marginRight: "5px",
                fontWeight: "200",
              }}
            />
            register
          </li>

          <li
            onClick={() => {
              setShowLogin(!showLogin);
              setShowRegister(false);
            }}
          >
            <FontAwesome
              name="angle-right"
              color="orange"
              size={15}
              style={{
                marginRight: "5px",
                fontWeight: "200",
              }}
            />
            login
          </li>
        </ul>
      </nav>
      <div
        className={styles.auth}
        style={{
          transform: showLogin ? "translateY(-5px)" : "translateY(-300px)",
        }}
      >
        <AuthBoard login />
      </div>

      <div
        className={styles.auth}
        style={{
          transform: showRegister ? "translateY(-5px)" : "translateY(-500px)",
        }}
      >
        <AuthBoard register />
      </div>
    </>
  );
};

export default Navbar;
