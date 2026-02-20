import Button from "./UI/Button";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo-title">Frontend Mentor</span>
      </div>
      <nav className="nav-main">
        <ul className="nav-list">
          <Button className="nav-list-item" textOnly={true} to="/">
            Our Mission
          </Button>
          <Button className="nav-list-item" textOnly={true} to="/">
            Browse Sessions
          </Button>
          <Button textOnly={false} to={""} className="nav-list-item">
            Upcoming Sessions
          </Button>
        </ul>
      </nav>
    </header>
  );
}
