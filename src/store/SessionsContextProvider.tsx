import { useReducer } from "react";
import {
  SessionsContext,
  type SessionContextValue,
  type SessionModel,
  type SessionsState,
} from "./SessionsContext";
import { DUMMY_SESSIONS } from "../dummy-sessions";

const initialState: SessionsState = {
  allSessions: DUMMY_SESSIONS,
  upcomingSessions: [],
};

type AddSessionAction = {
  type: "ADD_SESSION";
  payload: SessionModel;
};

type RemoveSessionAction = {
  type: "REMOVE_SESSION";
  payload: number;
};

type SessionAction = AddSessionAction | RemoveSessionAction;

function sessionReducer(
  state: SessionsState,
  action: SessionAction,
): SessionsState {
  switch (action.type) {
    case "ADD_SESSION":
      return {
        ...state,
        upcomingSessions: [...state.upcomingSessions, action.payload],
      };

    case "REMOVE_SESSION":
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export default function SessionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reducerState, dispatch] = useReducer(sessionReducer, initialState);
  const addSession = (session: SessionModel) => {
    dispatch({ type: "ADD_SESSION", payload: session });
  };

  const removeSession = (sessionId: number) => {
    dispatch({ type: "REMOVE_SESSION", payload: sessionId });
  };

  const ctxValue: SessionContextValue = {
    ...reducerState,
    addSession,
    removeSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
}
