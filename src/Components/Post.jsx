/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import styles from "./Post.module.css";

export default function Post(props) {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.postAuthor}>
          <Avatar src="s" />
          <div className={styles.authorDetails}>
            <strong>s</strong>
            <span>s</span>
          </div>
        </div>
        <time
          className={styles.postTimesStamp}
          dateTime="2024-07-14 21:00:00"
          title="14 de Julho de 2024 as 21h00"
        >
          Publicado há 1 hora.
        </time>
      </header>

      <main className={styles.postContent}></main>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>{/* <Comment /> */}</div>
    </article>
  );
}
