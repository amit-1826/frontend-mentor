import SessionsList from "../components/Sessions/SessionsList";
import { DUMMY_SESSIONS } from "../dummy-sessions";

export default function BrowseSessions() {
  return (
    <>
      <h1 className="page-title">Available Mentoring Sessions</h1>
      <p className="page-description">
        Browse our available mentoring sessions and find the perfect one for
        you.
      </p>

      <SessionsList sessions={DUMMY_SESSIONS} />
    </>
  );
}
