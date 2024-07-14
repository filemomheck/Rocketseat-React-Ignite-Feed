/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export default function Sidebar({
  coverPicture,
  avatarPicture,
  fullName,
  job,
}) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverPicture} />

      <div className={styles.profile}>
        <Avatar src={avatarPicture} />
        <strong>{fullName}</strong>
        <span>{job}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
