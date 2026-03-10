import { useSessionsContext } from "../../store/SessionsContext";
import { formatDateTime } from "../../utils/date-format";

type UpcomingSessionProps = {
  title: string;
  description: string;
  date: string;
  id: number;
};

export default function UpcomingSession({
  title,
  description,
  date,
  id,
}: UpcomingSessionProps) {
  const sessionContext = useSessionsContext();

  function cancelSession() {
    sessionContext.removeSession(id);
  }

  return (
    <div className="upcoming-session-item">
      <div className="upcoming-session-info">
        <h3 className="upcoming-session-title">{title}</h3>
        <p className="upcoming-session-description">{description}</p>
        <p className="upcoming-session-date">
          {formatDateTime(new Date(date))}
        </p>
      </div>
      <button className="btn btn-secondary color-red " onClick={cancelSession}>
        Cancel
      </button>
    </div>
  );
}
