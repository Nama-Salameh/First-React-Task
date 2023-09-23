import MembersList from "./components/MembersList";
import styles from "./App.module.css";
export default function App() {
  return (
    <div className={styles.appContainer}>
      <p>
        <b>Add members to Front-end development team </b>
      </p>
      <MembersList />
    </div>
  );
}
