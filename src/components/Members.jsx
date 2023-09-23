import "font-awesome/css/font-awesome.min.css";
import checkedImage from "../assets/checked.png";
import styles from "./../App.module.css";

export default function Members({ memberInfo }) {
  const { name, isMember } = memberInfo;

  if (isMember) {
    return (
      <div className={styles.member}>
        <div className={styles.personsInfo}>
          <i className={`${styles.userIcon} fa fa-user`}></i>
          <p>{name}</p>
        </div>
        <img
          src={checkedImage}
          alt="Ths checked"
          className={styles.checkedImage}
        />
      </div>
    );
  } else {
    return (
      <div className={`${styles.member} ${styles.notMember}`}>
        <div className={styles.personsInfo}>
          <i className={`${styles.userIcon} fa fa-user`}></i>
          <p>{name}</p>
        </div>
        <div className={styles.emptyCircle}> </div>
      </div>
    );
  }
}
