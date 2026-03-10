import { useNavigate } from "react-router";
import type { SessionModel } from "../../store/SessionsContext";

export default function SessionsItem({ session }: { session: SessionModel }) {
  const navigate = useNavigate();

  return (
    <div className="session-card">
      <div className="session-card-image">
        <img src={session.imageUrl} alt={session.title} />
      </div>
      <div className="session-card-content">
        <h2 className="session-card-title">{session.title}</h2>
        <p className="session-card-description">{session.description}</p>
        <p className="session-card-author">Author: {session.author}</p>
        <button
          className="btn btn-primary session-card-cta"
          onClick={() => navigate(`${session.id}`)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
