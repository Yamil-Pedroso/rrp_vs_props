import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import VideoPortalDemoPage from "./pages/VideoPortalDemoPage";
import MapDemoPage from "./pages/MapDemoPage";
// import HelpCenterPage from "./pages/HelperCenterPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoPortalDemoPage />} />
        <Route path="/map" element={<MapDemoPage />} />
        <Route path="/user-table" element={<UsersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
