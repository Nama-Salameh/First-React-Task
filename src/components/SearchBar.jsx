import "font-awesome/css/font-awesome.min.css";
import styles from "./../App.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <i className={`${styles.searchIcon} fa fa-search`} aria-hidden="true"></i>
      <input placeholder="Find members" className={styles.searchInput}></input>
    </div>
  );
}
