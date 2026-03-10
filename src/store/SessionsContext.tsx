import { createContext, useContext } from "react";

export type SessionModel = {
  id: number;
  title: string;
  description: string;
  author: string;
  aboutAuthor: string;
  imageUrl: string;
  publishedAt: string; // Optional field for published date
  agenda?: string[]; // Optional field for session agenda
  preRequisites?: string[]; // Optional field for session prerequisites
};

export type SessionsState = {
  allSessions: SessionModel[];
  upcomingSessions: SessionModel[];
};

export type SessionContextValue = SessionsState & {
  addSession: (session: SessionModel) => void;
  removeSession: (sessionId: number) => void;
};

export const SessionsContext = createContext<SessionContextValue | null>(null);

export function useSessionsContext() {
  const sessionContext = useContext(SessionsContext);
  if (!sessionContext) {
    throw new Error("");
  }
  return sessionContext;
}
