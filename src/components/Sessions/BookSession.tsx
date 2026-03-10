import { useState } from "react";
import {
  useSessionsContext,
  type SessionModel,
} from "../../store/SessionsContext";
import Modal from "../UI/Modal";
import BookSessionForm from "./BookSessionForm";
import { useParams } from "react-router";
import { formatDateTime } from "../../utils/date-format";

export default function BookSession() {
  const params = useParams();
  const sessionId = params.id as unknown as number;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const sessionContext = useSessionsContext();

  const session: SessionModel = sessionContext.allSessions.find(
    (s) => s.id == sessionId,
  )!;

  function bookSessionModal() {
    setIsModalOpen(true);
  }

  function handleBookSession(formData: { name: string; email: string }) {
    // Here you would typically send the booking data to your backend API
    console.log("Booking session:", session.title);
    console.log("User data:", formData);
    sessionContext.addSession(session);
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal
        title="Book Session"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <BookSessionForm
          sessionTitle={session.title}
          onSubmit={handleBookSession}
        />
      </Modal>

      <div className="session-details">
        <img
          src={session.imageUrl}
          alt={session.title}
          className="session-image"
        />
        <div className="session-info">
          <h2 className="session-title">{session.title}</h2>
          <p className="session-author">
            Author: <strong>{session.author}</strong>
          </p>
          <p className="session-publishedat">
            {formatDateTime(new Date(session.publishedAt))}
          </p>
          <p className="session-description">{session.description}</p>
          <button
            className="btn btn-primary session-info-cta"
            onClick={bookSessionModal}
          >
            Book Session
          </button>
        </div>
      </div>
      <div className="session-metadata">
        <h2>What you'll learn</h2>
        <ul className="session-agenda-list">
          {session.agenda?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {session.preRequisites?.length && (
          <>
            <h2>Pre-requisites</h2>
            <ul className="session-prerequisites-list">
              {session.preRequisites.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <h2>About the Author</h2>
        <p className="session-about-author">{session.aboutAuthor}</p>
      </div>
    </>
  );
}
