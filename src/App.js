import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Firstpage from './1st_Components/Home/FirstPage';
import About from './1st_Components/aboutPage/about'
import Blog from './1st_Components/Blog/blog'
import PerProfile from "./1st_Components/PersonelPage/PerProfile/PerProfile.js";
import Program from './1st_Components/Program/Program'
import MainPer from './1st_Components/PersonelPage/mainPer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/home" element={<Firstpage />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Main" element={<MainPer/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Program" element={<Program/>} />
          <Route path="/PerProfile" element={<PerProfile/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
