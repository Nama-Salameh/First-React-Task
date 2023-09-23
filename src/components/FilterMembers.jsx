import Members from "./Members";
import NotMembers from "./NotMembers";
import SeachBar from "./SearchBar";
import SubmitButton from "./SubmitButtons";
import styles from "./../App.module.css";

export default function FilterMembers() {

  return (
    <div className={styles.membersContainer}>
      <div className={styles.membersList}>
        <SeachBar />
        <NotMembers memberName="Carolien Bloeme" />
        <Members memberName="Sun Jun" />
        <NotMembers memberName="Song Bao" />
        <Members memberName="Olivia Arribas" />
        <NotMembers memberName="Bonginkosi Mdladlana" />
        <Members memberName="Arina Belomestnykh" />
        <Members memberName="Jacqueline Likoki" />
      </div>
      <SubmitButton />
    </div>
  );
}
