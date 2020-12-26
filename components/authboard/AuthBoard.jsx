import { useEffect } from "react";
import styles from "./AuthBoard.module.css";

const AuthBoard = ({ login, register }) => {
  return (
    <>
      {login && (
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="masukan email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="masukan password"
              name="password"
            />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button}>login</button>
          </div>
        </form>
      )}

      {register && (
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="masukan email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">password</label>
            <input type="password" placeholder="masukan password" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password2">password2</label>
            <input type="password2" placeholder="masukan ulang password" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">phone</label>
            <input type="phone" placeholder="masukan whatsapp" />
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button}>login</button>
          </div>
        </form>
      )}
    </>
  );
};

export default AuthBoard;
