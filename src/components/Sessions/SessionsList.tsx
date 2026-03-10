import type { SessionModel } from "../../store/SessionsContext";
import SessionsItem from "./SessionItem";

export type SessionListProps = {
  sessions: SessionModel[];
};

export default function SessionsList({ sessions }: SessionListProps) {
  return (
    <section className="sessions-list">
      {sessions.map((session) => (
        <SessionsItem key={session.id} session={session} />
      ))}
    </section>
  );
}
