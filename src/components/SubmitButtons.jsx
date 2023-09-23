import styles from "./../App.module.css";

export default function SubmitButton() {
  return (
    <div className={styles.buttons}>
      <button className={styles.cancelButton}>Cancel</button>
      <button className={styles.saveButton}>SAVE</button>
    </div>
  );
}
