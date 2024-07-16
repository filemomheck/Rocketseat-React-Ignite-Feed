import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";

export default function Comment() {
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

            <button title="Excluir Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quas id. Magni recusandae sunt officiis facere ullam reiciendis
            fugiat rerum.
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
