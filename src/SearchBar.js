import "font-awesome/css/font-awesome.min.css";

export default function SearchBar() {
  return (
    <div className="div--search">
        <i class="fa fa-search search-icon" aria-hidden="true"></i>
      <input placeholder="Find members" className="input--search"></input>
    </div>
  );
}
