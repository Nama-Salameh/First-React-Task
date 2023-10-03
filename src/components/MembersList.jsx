import Members from "./Members";
import SeachBar from "./SearchBar";
import SubmitButton from "./SubmitButtons";
import styles from "./../App.module.css";

const MembersList = () => {
  const members = [
    {
      name: "Carolien Bloeme",
      isMember: false,
    },
    {
      name: "Sun Jun",
      isMember: true,
    },
    {
      name: "Song Bao",
      isMember: false,
    },
    {
      name: "Olivia Arribas",
      isMember: true,
    },
    {
      name: "Bonginkosi Mdladlana",
      isMember: false,
    },
    {
      name: "Arina Belomestnykh",
      isMember: true,
    },
    {
      name: "Jacqueline Likoki",
      isMember: true,
    },
  ];
  return (
    <div className={styles.membersContainer}>
      <div className={styles.membersList}>
        <SeachBar />

        {members.map((member, index) => (
          <Members key={index} memberInfo={member} />
        ))}
      </div>
      <SubmitButton />
    </div>
  );
}
export default MembersList;
