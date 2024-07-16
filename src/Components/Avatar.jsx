/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

export default function Avatar({ hasBorder = true, src }) {
  if (hasBorder) {
    return (
      <div className={styles.avatar}>
        <img src={src} />
      </div>
    );
  } else {
    return (
      <div className={styles.avatarHasBorder}>
        <img src={src} />
      </div>
    );
  }
}
