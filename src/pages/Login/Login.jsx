import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "../../shared/ui/Header/Header";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // успех
      if (response.ok && data.data?.token) {
        localStorage.setItem("token", data.data.token);
        navigate("/home");
        return;
      }

      // разбор ошибок
      const apiError = data?.error;

      if (apiError?.code === 401) {
        setError("Неверный email или пароль");
      } else if (apiError?.details === "Validation error") {
        const nonField = apiError?.errors?.non_field_errors?.[0];
        setError(nonField ?? "Проверьте правильность заполнения полей");
      } else {
        setError("Не удалось войти. Попробуйте позже.");
      }
    } catch (err) {
      console.error(err);
      setError("Сервер недоступен. Попробуйте позже.");
    }
  };

  return (
    <>
      <Header />
      <main className={styles.login_page}>
        <form className={styles.login_card} onSubmit={handleSubmit}>
          <h1 className={styles.login_title}>Вход</h1>
          <p className={styles.login_subtitle}>Войдите, чтобы продолжить</p>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Email</span>
            <input
              type="email"
              className={styles.login_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Пароль</span>
            <input
              type="password"
              className={styles.login_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>

          {error && <p className={styles.login_error}>{error}</p>}

          <button type="submit" className={styles.login_button}>
            Войти
          </button>

          <p className={styles.login_footer}>
            Нет аккаунта?{" "}
            <NavLink to={"/register"} replace>
              Зарегистрироваться
            </NavLink>
          </p>
        </form>
      </main>
    </>
  );
}
