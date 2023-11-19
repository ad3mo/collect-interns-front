import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import LogAs from "./pages/LogAs";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App font-roboto bg-primary-gray">
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/logas" element={<LogAs />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
