import { useState, useRef } from "react";
import React from 'react'
import Logo from "../Resources/art/Profile.jpg"
import SpellAudio from "../Resources/sound/Spell.mp3"; // "Snow Strippers - Under Your Spell"
import OctoberAudio from "../Resources/sound/October.mp3"; // "Girl In Red - We Fell In Love In October"
import LeniAudio from "../Resources/sound/Leni.mp3"; // "Crystal Castles - Leni"
import DetailsIcon from "../Resources/art/Details.png"; //  https://openmoji.org/
import YoutubeIcon from "../Resources/art/Youtube.png"; //  https://openmoji.org/
import GitHubIcon from "../Resources/art/GitHub.png"; //  https://openmoji.org/
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"

const Navbar = () => {

  const SpellRef = useRef(null)
  const OctoberRef = useRef(null)
  const LeniRef = useRef(null)
  const isPlayingRef = useRef(false);

  const playOctober = () => {
    OctoberRef.current = new Audio(OctoberAudio);
    OctoberRef.current.volume = 0.05;
    OctoberRef.current.play().then(() => {
    isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
};

const playSpell = () => {
    SpellRef.current = new Audio(SpellAudio);
    SpellRef.current.volume = 0.03;
    SpellRef.current.play().then(() => {
    isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
};

const playLeni = () => {
  LeniRef.current = new Audio(LeniAudio);
    LeniRef.current.volume = 0.03;
    LeniRef.current.play().then(() => {
    isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
}

  const stopHoverAudio = () => 
  {
  if (SpellRef.current && isPlayingRef.current) 
    {
      SpellRef.current.pause();
      SpellRef.current.currentTime = 0;
    }

  if (OctoberRef.current && isPlayingRef.current)
  {
      OctoberRef.current.pause();
      OctoberRef.current.currentTime = 0;
  }

  if (LeniRef.current && isPlayingRef.current)
  {
      LeniRef.current.pause();
      LeniRef.current.currentTime = 0;
  }
};

  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home", 
      icon: <HomeIcon/>
    },
    {
      text: "Details", 
      icon: <HomeIcon/>
    },
    {
      text: "YouTube", 
      icon: <HomeIcon/>
    }
    ,
    {
      text: "GitHub", 
      icon: <HomeIcon/>
    }
  ]

  return <nav>
      <div className = "nav-logo-contianer">
        <img src = {Logo} alt = ""/>
      </div>

      <div className = "Navbar-links-container">
        <a href = "">Home</a>
        <a href = 
        ""
        onMouseEnter = {playOctober}
        onMouseLeave = {stopHoverAudio}>
          Details <img src={DetailsIcon} alt="Details" className="details-link-icon"/> 
        </a>

        <a href = 
        "https://www.youtube.com/Marqed" 
        onMouseEnter = {playSpell} 
        onMouseLeave = {stopHoverAudio}>
          YouTube <img src={YoutubeIcon} alt="YouTube" className="youtube-link-icon"/>
          </a>

        <a href = 
        "https://github.com/Marqed4"
        onMouseEnter = {playLeni} 
        onMouseLeave = {stopHoverAudio}>
        GitHub <img src={GitHubIcon} alt="GitHub" className="github-link-icon"/>
        </a>
      </div>
  
  </nav>
}

export default Navbar;