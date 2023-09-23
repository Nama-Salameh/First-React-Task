import styles from "./../App.module.css";

const SubmitButton = () =>{
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.cancelButton}>Cancel</button>
      <button className={styles.saveButton}>SAVE</button>
    </div>
  );
}
export default SubmitButton;