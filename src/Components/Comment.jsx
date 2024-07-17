/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

export default function Comment({ content, onDeleteComment }) {
  //
  // Delete Comment:
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/filemomheck.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Letícia Alves</strong>
              <time
                className={styles.postTimesStamp}
                dateTime="2024-07-14 21:00:00"
                title="14 de Julho de 2024 as 21h00"
              >
                Cerca de 1 hora atrás.
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
