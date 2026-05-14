import { useEffect } from "react";

import bannerbackground from "../resources/art/Background Project/Gradients/Orange Glob Marble.gif"
import Icon from "./Icon.js";
import Navbar from "./Navbar.js"
import MediaPreviews from "./MediaPreviews.js"
import Calsigh from "./Calisigh.js"
import Projects from "./Projects.js"

const Home = () => {

  useEffect(() => {
  document.title = "Marqed's Homepage";
}, []);

  return ( 
    <>
      <div className="home-container">
        <Icon />
        <Navbar/>
        <img src={bannerbackground} alt="" className="home-banner-bg" />

        <div className="home-content">
          <div className="home-card">
            <p>
            Hey, I’m Zach! Most people online know me as Marqed.<br /><br />
            This is my personal website, where I share my work and projects as an aspiring professional developer & video editor.<br /><br />
            
            On this site, you can find a selection of my video edits, as well as some of my coding projects and other creative endeavors.
            </p>
          </div>
          <div className="home-card">
            <p>
            Thanks for stopping by, and I hope you enjoy exploring this site!
            </p>
          </div>
          <div className="home-card">
            <h2>
              <a href="/Projects">
                <u>Projects</u>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;