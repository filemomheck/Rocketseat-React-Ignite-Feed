/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import styles from "./Post.module.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Post({ author, publishedAt, content }) {
  // Data formatada (Intl JavaScript):
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  // Data formatada (relativa) para o post (date-fns):
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.postAuthor}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorDetails}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          className={styles.postTimesStamp}
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <main className={styles.postContent}>
        {/* Verificando se o texto é paragráfo ou conteúdo, e retornando elemento HTML */}

        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </main>

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
