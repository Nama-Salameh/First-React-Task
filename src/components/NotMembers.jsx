import "font-awesome/css/font-awesome.min.css";
import "./../App.css";

export default function Members(name) {
  const { memberName } = name;
  return (
    <div className="member-div notMember-div">
      <div className="user-div">
        <i className="fa fa-user user-icon user-icon-notMember"></i>
        <p>{memberName}</p>
      </div>
      <div className="empty-circle"> </div>
    </div>
  );
}
