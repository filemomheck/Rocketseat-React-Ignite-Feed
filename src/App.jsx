/* eslint-disable react/jsx-key */
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import styles from "./App.module.css";
import "./global.css";
import Post from "./Components/Post";

// Posts:
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/filemomheck.png",
      name: "Filemom Viel Heck",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu GitHub. É um projeto que estou trabalhando no curso da Rocketseat. O nome do projeto é Ignite Feed, e estamos utilizando o React!",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-07-16 10:01:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/filemomheck.png",
      name: "Filemom Viel Heck",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Bom diaaaa turma" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu GitHub. É um projeto que estou trabalhando no curso da Rocketseat. O nome do projeto é Ignite Feed, e estamos utilizando o React!",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-07-15 21:01:00"),
  },
];

// Component APP:
export default function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar
          coverPicture="https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          avatarPicture="https://github.com/filemomheck.png"
          fullName="Filemom Viel Heck"
          job="Web Developer"
        />

        <main>
          {/* Iteração nos posts: */}
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </main>
    </div>
  );
}
