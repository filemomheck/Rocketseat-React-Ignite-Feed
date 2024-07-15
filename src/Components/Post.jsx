/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import styles from "./Post.module.css";

export default function Post({ fullName, job }) {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.postAuthor}>
          <Avatar src="https://github.com/filemomheck.png" />
          <div className={styles.authorDetails}>
            <strong>{fullName}</strong>
            <span>{job}</span>
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
      <main className={styles.postContent}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu GitHub. É um projeto que estou
          trabalhando no curso da Rocketseat. O nome do projeto é Ignite Feed, e
          estamos utilizando o React!
        </p>
        <p>
          <a href="https://github.com/filemomheck/Rocketseat-React-Ignite-Feed">
            👉 jane.design/doctorcare
          </a>
        </p>
      </main>
      <footer></footer>
    </article>
  );
}
