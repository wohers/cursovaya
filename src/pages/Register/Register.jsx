import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "../../shared/ui/Header/Header";
import { useState } from "react";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [second_name, setSecond_name] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !first_name || !second_name) {
      setError("Заполните все поля");
      return;
    }

    if (password != password2) {
      setError('Пароли должны совпадать')
      return
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, first_name, second_name }),
      });
      const data = await response.json();

      if (response.ok && data.data.token) {
        navigate("/login");
        return;
      }
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
          <h1 className={styles.login_title}>Регистрация</h1>
          <p className={styles.login_subtitle}>
            Создайте аккаунт, чтобы продолжить
          </p>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Имя</span>
            <input
              type="text"
              className={styles.login_input}
              placeholder="Иван"
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </label>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Фамилия</span>
            <input
              type="text"
              className={styles.login_input}
              placeholder="Иванов"
              onChange={(e) => setSecond_name(e.target.value)}
            />
          </label>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Email</span>
            <input
              type="email"
              className={styles.login_input}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Пароль</span>
            <input
              type="password"
              className={styles.login_input}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className={styles.login_field}>
            <span className={styles.login_label}>Повторите пароль</span>
            <input
              type="password"
              className={styles.login_input}
              placeholder="••••••••"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </label>

          {error && <p className={styles.login_error}>{error}</p>}

          <button type="submit" className={styles.login_button}>
            Зарегистрироваться
          </button>

          <p className={styles.login_footer}>
            Уже есть аккаунт?{" "}
            <NavLink to={"/login"} replace>
              Войти
            </NavLink>
          </p>
        </form>
      </main>
    </>
  );
}
