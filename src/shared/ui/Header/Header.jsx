import styles from "./styles.module.css";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.osnova_shapka}>
      <nav className={styles.knopki_many}>
        <div className={styles.header_menu}>
          <NavLink to="/home" className={styles.knopka_da}>
            Главная
          </NavLink>
          <NavLink to="/heroes" className={styles.knopka_da}>
            Герои
          </NavLink>
          <NavLink to="/progress" className={styles.knopka_da}>
            Прогресс
          </NavLink>
          <NavLink to="/support" className={styles.knopka_da}>
            Поддержка
          </NavLink>
        </div>

        <img src={logo} alt="logo" className={styles.logo} />

        <div className={styles.header_auth}>
          <NavLink to="/login" className={styles.knopka_da}>
            Войти
          </NavLink>
          <NavLink to="/register" className={styles.knopka_da}>
            Регистрация
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
