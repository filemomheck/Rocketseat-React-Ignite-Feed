import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import styles from "./App.module.css";
import "./global.css";
import Post from "./Components/Post";

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
          <Post fullName="Filemom Viel Heck" job="Web Developer" />
        </main>
      </main>
    </div>
  );
}
