import { useSessionsContext } from "../../store/SessionsContext";
import UpcomingSession from "./UpcomingSession";

export default function UpcomingSessions() {
  const sessionsContext = useSessionsContext();

  return (
    <div className="upcoming-sessions">
      <div className="upcoming-sessions-list">
        {sessionsContext.upcomingSessions.length === 0 ? (
          <p className="no-sessions-message">No upcoming sessions booked.</p>
        ) : (
          sessionsContext.upcomingSessions.map((session) => (
            <UpcomingSession
              key={session.id}
              title={session.title}
              description={session.description}
              date={session.publishedAt}
              id={session.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
