import { Routes, Route } from 'react-router-dom';
import UnfoundPage from "./Components/UnfoundPage.jsx";

import './App.css';

// <---- Landing Page ---->
import './Components/Icon.css';
import './Components/Navbar.css';
import './Components/Footer.css'
import './Components/HomeBody.css';
import './Components/HomeBanner.css';
import './Components/HomePortfiolio.css'
import './Components/HomeText.css';
import './Components/YouTubeDropdown.css';
import './Components/HomeEditsShorts.css';
import './Components/HomeEdits.css';
import './Components/HomeShorts.css';
import './Components/MediaPreviews.css';

// <---- Landing Page ---->
import Home from "./Components/Home";

// <---- Details Page ---->
import './Components/Details.css';
import Details from "./Components/Details";

// <---- Custom Calendar Proj Page ---->
import './Components/Calisigh.css';
import Calisigh from "./Components/Calisigh.js";

// <---- PopularVote Proj Page ---->
import './Components/PopularVote.css';
import PopularVote from "./Components/PopularVote.js";

// <---- Resume Page ---->
import './Components/Resume.css';
import Resume from "./Components/Resume";

// <---- Projects Page ---->
import './Components/Projects.css';
import Projects from "./Components/Projects";

import DefaultBackground from "./resources/art/Background Project/Gradients/Site.gif";

const App = () => (
  <>
    <img src={DefaultBackground} alt="" className="home-bg" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Calisigh" element={<Calisigh />} />
      <Route path="/PopularVote" element={<PopularVote />} />
      <Route path="*" element={<UnfoundPage />} />
    </Routes>
  </>
);

export default App;