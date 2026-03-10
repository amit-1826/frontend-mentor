import { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import UpcomingSessions from "../Sessions/UpcomingSessions";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showUpcomingSessionsHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Modal
        title="Upcoming Sessions"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <UpcomingSessions></UpcomingSessions>
      </Modal>
      <header className="header">
        <div className="logo-container">
          <span className="logo-title">Frontend Mentor</span>
        </div>
        <nav className="nav-main">
          <ul className="nav-list">
            <Button className="nav-list-item" textonly={true} to="/">
              Our Mission
            </Button>
            <Button className="nav-list-item" textonly={true} to="/sessions">
              Browse Sessions
            </Button>
            <Button
              textonly={false}
              onClick={showUpcomingSessionsHandler}
              className="nav-list-item"
            >
              Upcoming Sessions
            </Button>
          </ul>
        </nav>
      </header>
    </>
  );
}
