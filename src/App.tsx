import { Route, Routes } from "react-router";
import Header from "./components/Navigation/Header";
import SessionContextProvider from "./store/SessionsContextProvider";
import HomePage from "./pages/HomePage";
import BrowseSessions from "./pages/Sessions";
import BookSession from "./components/Sessions/BookSession";

function App() {
  return (
    <SessionContextProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sessions" element={<BrowseSessions />} />
          <Route path="sessions/:id" element={<BookSession />} />
        </Routes>
      </main>
    </SessionContextProvider>
  );
}

export default App;
