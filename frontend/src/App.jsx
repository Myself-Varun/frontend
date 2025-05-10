import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./user/pages/Home";
import Support from "./user/pages/support";
import Subscription from "./user/pages/sub";
import AdminPage from "./admin/pages/adminpage";
import AdminHome from "./admin/pages/adminhome";
import ListPage from "./admin/pages/ListPage";
import  VideoDashboard from "./user/pages/MovieShowPage";
import WatchPage from "./user/pages/WatchPage";
 
import "./App.css";
import Login from "./auth/Loginpgae";
import Signup from "./auth/RegisterPage";

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminpage" element={<AdminHome />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/movies&shows" element={< VideoDashboard />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
       
    </Router>
  );
}

export default App;
