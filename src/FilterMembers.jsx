import Members from "./Members";
import NotMembers from "./NotMembers";
import SeachBar from "./SearchBar";
import SubmitButton from "./SubmitButtons";

export default function FilterMembers() {
  return (
    <div className="div--filter--Container">
      <div className="div--filter">
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
