import { useEffect } from "react";
import Navbar from "./Navbar.js"

import CalsighLogo from "../resources/art/calisigh page graphics/icon.png"
import CalsighName from "../resources/art/calisigh page graphics/Calsigh Inactive.gif"
import Made from "../resources/art/Background Project/Gradients/Made Inactive.gif"
import Overview from "../resources/art/Background Project/Gradients/Overview Inactive.gif"
import Features from "../resources/art/Background Project/Gradients/Features Inactive.gif"
import Architecture from "../resources/art/Background Project/Gradients/Architecture Inactive.gif"
import MonthsView from "../resources/art/calisigh page graphics/Months View.png"
import YearsView from "../resources/art/calisigh page graphics/Years View.png"
import SettingsView from "../resources/art/calisigh page graphics/Settings View.png"

const Calsigh = () => {

  useEffect(() => {
    document.title = "Marqed's Custom Calendar";
  }, []);

  return (
    <div className="custom-calendar-container">
      <Navbar/>
      <h1><img src={CalsighLogo} className="custom-calendar-logo" alt="CalsighLogo"/></h1>
      <h1><img src={CalsighName} className="custom-calendar-name" alt="CalsighName"/></h1>
      
      {/* Months Viewt */}
      <div className="months-view-section">
        <img src={MonthsView} className="months-view-example" alt="Month View"/>
        <div className="months-view-docs">

          <p className="months-view-docs-label">App Controls</p>
          <ul className="months-view-list">
            <li><span className="mv-tag">a.1</span> Left arrow button ← navigates to the previous months/years</li>
            <li><span className="mv-tag">a.2</span> Right arrows button → navigates to the next months/years</li>
            <li><span className="mv-tag">a.3</span> FAQ/About button → link for Calisigh documentation</li>
            <li><span className="mv-tag">a.4</span> Chat button → initiate integrated Calisigh AI assistant</li>
            <li><span className="mv-tag">a.4.1</span> Calisigh's AI Assistant has knowledge of your events </li>
            <li><span className="mv-tag">a.5</span> Settings button → access app settings or user preferences</li>
            <li><span className="mv-tag">a.6</span> Mini calendar sidebar → compact monthly overview for quick date navigation</li>
            <li><span className="mv-tag">a.7</span>Remove button ✕ removes user inputs, e.g., events, backgrounds, alarm sounds  </li>
          </ul>

          <p className="months-view-docs-label">Months View</p>
          <ul className="months-view-list">
            <li><span className="mv-tag">mv.1</span> Month &amp; Year 🗓️ displayed at the top center of the calendar grid.</li>
            <li><span className="mv-tag">mv.1.1</span> This also acts as a button allowing toggle between months & years views</li>
            <li><span className="mv-tag">mv.2</span> Column day headers → marks the start day of the week</li>
            <li><span className="mv-tag">mv.3</span> Event card → displays a truncated event title and its scheduled time</li>
            <li><span className="mv-tag">mv.3.1</span> Multiple events can be views via scrollbar</li>
            <li><span className="mv-tag">mv.4</span> Day cell → contains data about that day<br/>&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;⁃ Day (MV.5)<br/>&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;⁃ Events &amp; Times</li>
            <li><span className="mv-tag">mv.4.1</span> Current day is shadded</li>
          </ul>
        </div>
      </div>

      {/* Years View */}
      <div className="years-view-section">
        <img src={YearsView} className="years-view-example" alt="Years View"/>
        <div className="years-view-docs">

          <p className="years-view-docs-label">Years View</p>
          <ul className="years-view-list">
            <li><span className="mv-tag">yv.1</span> Year 🗓️ displayed at the top center of the calendar grid.</li>
            <li><span className="mv-tag">yv.1.1</span> This also acts as a button allowing toggle between months & years views</li>
            <li><span className="mv-tag">yv.2</span> Year cell → contains data about that year<br/>&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;⁃ Year (yv.3)</li>
            <li><span className="mv-tag">yv.2.1</span> Current year is shadded</li>
          </ul>
        </div>
      </div>

      {/* Settings View */}
      <div className="settings-view-section">
        <img src={SettingsView} className="settings-view-example" alt="Settings View"/>
        <div className="settings-view-docs">

          <p className="settings-view-docs-label">Settings View</p>
          <ul className="settings-view-list">
            <li><span className="mv-tag">s.1</span> Background selector → where default/custom uploaded backgrounds live</li>
            <li><span className="mv-tag"></span> Acceptable Formats: JPG, PNG, GIF &amp; WEBP</li>
            <li><span className="mv-tag">s.2</span> Upload button → upload a custom background image from your device</li>
            <li><span className="mv-tag">s.3</span> Save button → saves the current background &amp; alert sound selection</li>
            <li><span className="mv-tag">s.4</span> Cancel button → discards changes, stops alert sound playback, and closes the settings view</li>
            <li><span className="mv-tag">s.5</span> Selected background → currently active background is highlighted with a border</li>
            <li><span className="mv-tag">s.6</span> Background card → displays a preview thumbnail and label of the background</li>
            <div className="divider" />
            <li><span className="mv-tag">s.7</span> Alert Sound panel → select an alert sound for calendar event notifications</li>
            <li><span className="mv-tag">s.8</span> Default Chime → the built-in default notification sound</li>
            <li><span className="mv-tag">s.9</span> Upload button → upload a custom audio file as an alert sound</li>
            <li><span className="mv-tag"></span> Acceptable Formats: MP1, MP2, MP3, WAV, AIFF &amp; AU</li>
            <li><span className="mv-tag">s.10</span> Alert sound card → displays a truncated alert sound title</li>
            <li><span className="mv-tag">s.11</span> Selected Alert → currently active alert sound is highlighted with a border</li>
          </ul>
        </div>
      </div>
      
      <div className="custom-calendar-content">
        <div className="custom-calendar-layout-made">
          <h2 className="made-with-header">
            <img src={Made} className="made-with" alt="Made" />
          </h2>
          <div className="introduction-container">
            <p className="introduction-body">
              Build Tools: Maven, Cargo, Node.js/Vite<br/><br/>
              Frontend: React (Tauri)<br/><br/>
              Backend: Spark Java (embedded REST server)<br/><br/>
              Desktop: Tauri (Rust + WebView)<br/><br/>
              Lang: Java, Rust, JavaScript/TypeScript, HTML/CSS<br/><br/>
            </p>
          </div>
        </div>

        <div className="custom-calendar-layout-overview">
          <h2 className="custom-calendar-overview-header">
            <img src={Overview} className="overview-header" alt="Overview" />
          </h2>
          <p className="overview-body">
            Calsigh is a feature rich desktop application built with Tauri, combining a React frontend with a Java backend. <br /><br />
            The app embeds a local Spark Java REST API server inside the JAR, which the Rust/Tauri layer communicates with to deliver calendar data to the UI. <br /><br />
            Calsigh also includes an integrated handling for an AI engine (Ollamma 3.2) 
            that adapts to the user's device specifications to run efficiently and cost effectively.
          </p>
        </div>

        <div className="custom-calendar-layout-features">
          <h2 className="custom-calendar-features-header">
            <img src={Features} className="features-header" alt="Features" />
          </h2>
          <p className="features-body">
            • Custom calendar views and event management<br/>
            • Embedded REST API via Spark Java<br/>
            • Native desktop experience via Tauri + WebView<br/>
            • React-based UI with Vite for fast builds<br/>
            • Packaged as a standalone JAR (customcalendar.jar)<br/>
          </p>
        </div>

        <div className="custom-calendar-layout-architecture">
          <h2 className="custom-calendar-architecture-header">
            <img src={Architecture} className="architecture-header" alt="Architecture" />
          </h2>
          <p className="architecture-body">
            React (UI)<br/>
            ↓<br/>
            Tauri (Rust + WebView)<br/>
            ↓<br/>
            Spark Java REST Server<br/>
            ↓<br/>
            Calendar Logic (Java/JDK)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calsigh;