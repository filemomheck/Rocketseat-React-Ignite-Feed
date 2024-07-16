/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

export default function Post({ author, publishedAt, content }) {
  //
  // Formatando data no Intl:
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  //
  // Data formatada (relativa) para o post (date-fns):
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  //
  // Avisar quando acontecer uma alteração nos comentários:
  const [comments, setComments] = useState(["Post muito bacana!!"]);

  //
  // Avisar quando criar um novo comentário:
  const [newCommentText, setNewCommentText] = useState("");

  //
  // Funções que são disparadas através de ação do usuário, "handle":
  function handleCreateNewComment() {
    //
    // Evitar redirecionamento:
    event.preventDefault();
    setNewCommentText("");

    //
    // Imutabilidade:
    setComments([...comments, newCommentText]);
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="commentContent"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário."
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
