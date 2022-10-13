import Menu from "../menu";
import SideContent from "../side-content";
import styles from "./layout.module.scss";

export default function Layout(props: any) {
  console.log(props)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Menu page={props.page} />
        <SideContent />
        <div className={styles.mainContent}>{props.children}</div>
      </main>
    </div>
  );
}
