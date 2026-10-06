import styles from "./styles.module.css";
import logo from "../../../assets/logo.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(stored ? JSON.parse(stored) : null);
  }, [location.pathname]);

  async function handleLogout() {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        await fetch("http://127.0.0.1:8000/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/home");
    }
  }

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
          {user ? (
            <>
              <span className={styles.knopka_da}>{user.first_name}</span>
              <a onClick={handleLogout} className={styles.knopka_da}>
                Выйти
              </a>
            </>
          ) : (
            <>
              <NavLink to="/login" className={styles.knopka_da}>
                Войти
              </NavLink>
              <NavLink to="/register" className={styles.knopka_da}>
                Регистрация
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
