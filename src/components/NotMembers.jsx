import "font-awesome/css/font-awesome.min.css";
import styles from "./../App.module.css";

export default function Members(name) {
  const { memberName } = name;
  return (
<div className={`${styles.member} ${styles.notMember}`}>
      <div className={styles.personsInfo}>
      <i className={`${styles.userIcon} fa fa-user`}></i>
        <p>{memberName}</p>
      </div>
      <div className={styles.emptyCircle}> </div>
    </div>
  );
}
