import "font-awesome/css/font-awesome.min.css";
import checkedImage from "../assets/checked.png";
import styles from "./../App.module.css";

export default function Members(name) {
  const { memberName } = name;
  return (
    <div className={styles.member}>
      <div className={styles.personsInfo}>
        <i className={`${styles.userIcon} fa fa-user`}></i>
        <p>{memberName}</p>
      </div>
      <img src={checkedImage} alt="Ths checked" className={styles.checkedImage} />
    </div>
  );
}
