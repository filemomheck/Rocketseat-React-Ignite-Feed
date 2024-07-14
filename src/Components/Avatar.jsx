/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";

export default function Avatar({ src }) {
  return (
    <div className={styles.avatar}>
      <img src={src} />
    </div>
  );
}
