import "font-awesome/css/font-awesome.min.css";
import checkedImage from "./checked.png";
import "./App.css";
export default function Members(name) {
  const { memberName } = name;
  return (
    <div className="member-div">
      <div className="user-div">
        <i className="fa fa-user user-icon"></i>
        <p>{memberName}</p>
      </div>
      <img src={checkedImage} alt="Ths checked" className="image--checked" />
    </div>
  );
}
