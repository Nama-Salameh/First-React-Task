import FilterMembers from "./components/FilterMembers";
import styles from "./App.module.css"
export default function App() {
  return (
    <div className={styles.appContainer} >
    <p> <b>Add members to Front-end development team </b> </p>
      <FilterMembers/>
    </div>
  );
}
