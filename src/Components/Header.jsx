import styles from "./Header.module.css";
import logoIgnite from "../assets/logo-ignite.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logotipo do Ignite Feed" />
    </header>
  );
}
