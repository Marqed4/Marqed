import { useEffect } from "react";
import Navbar from "./Navbar.js"

import CalisighName from "../resources/art/calisigh page graphics/Calisigh.gif"
import Made from "../resources/art/Background Project/Gradients/Made Inactive.gif"
import Overview from "../resources/art/Background Project/Gradients/Overview Inactive.gif"
import Features from "../resources/art/Background Project/Gradients/Features Inactive.gif"
import Architecture from "../resources/art/Background Project/Gradients/Architecture Inactive.gif"
import MonthsView from "../resources/art/calisigh page graphics/Months View.png"
import YearsView from "../resources/art/calisigh page graphics/Years View.png"
import ChatView from "../resources/art/calisigh page graphics/Chat View.png"
import SettingsView from "../resources/art/calisigh page graphics/Settings View.png"
import AddAlarmView from "../resources/art/calisigh page graphics/Add Alarm View.png"
import EditAlarmView from "../resources/art/calisigh page graphics/Edit Alarm View.png"
import EditDuplicateAlarmView from "../resources/art/calisigh page graphics/Duplicate Date Selection.png"
import EventView from "../resources/art/calisigh page graphics/Event View.png"

const Calsigh = () => {

  useEffect(() => {
    document.title = "Calisigh";
  }, []);

  return (
    <div className="custom-calendar-container">
      <Navbar/>
      {/* TODO: Don't leave the entire header as clickable*/}
      <h1>
        <a
          href="https://github.com/Marqed4/Calisigh"
          target="_blank"
          rel="noopener noreferrer"
        >

          <img src={CalisighName}
          className="custom-calendar-name"
          alt="CalsighName"
          />
        </a>
      </h1>

      <div className="app-controls-section">
        <p className="app-controls-docs-label">App Controls</p>
        <ul className="app-controls-list">
          <li><span className="mv-tag">a.1</span> Left arrow button ← navigates to the previous months/years</li>
          <li><span className="mv-tag">a.2</span> Right arrows button → navigates to the next months/years</li>
          <li><span className="mv-tag">a.3</span> FAQ/About button → link for Calisigh documentation</li>
          <li><span className="mv-tag">a.4</span> Chat button → initiate integrated Calisigh AI assistant</li>
          <li><span className="mv-tag">a.4.1</span> Calisigh's AI Assistant has knowledge of your events</li>
          <li><span className="mv-tag">a.5</span> Settings button → access app settings or user preferences</li>
          <li><span className="mv-tag">a.6</span> Mini calendar sidebar → compact monthly overview for quick date navigation</li>
          <li><span className="mv-tag">a.7</span> Remove button ✕ removes user inputs, e.g., events, backgrounds, alarm sounds</li>
        </ul>
      </div>

      
      {/* Months Viewt */}
      <div className="months-view-section">
        <img src={MonthsView} className="months-view-example" alt="Month View"/>
        <div className="months-view-docs">
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

      {/* Add Alarm View */}
      <div className="months-view-section">
        <img src={AddAlarmView} className="months-view-example" alt="Add Alarm View"/>
        <div className="months-view-docs">
          <p className="months-view-docs-label">Add Alarm View</p>
          <ul className="months-view-list">
            <li><span className="mv-tag">av.1</span> Date label → displays the selected date the alarm is being added to</li>
            <li><span className="mv-tag">av.2</span> Title field → text input for the alarm's title</li>
            <li><span className="mv-tag">av.3</span> Description field → multiline text input for an optional alarm description</li>
            <li><span className="mv-tag">av.4</span> Time field → time input for scheduling the alarm</li>
            <li><span className="mv-tag">av.5</span> Clock icon → native time picker display for the time field </li>
            <li><span className="mv-tag">av.5.1</span> Time dropdown (hours, minutes, meridiems) </li>
            <li><span className="mv-tag">av.6</span> Save button → validates and saves the alarm, closes the view</li>
            <li><span className="mv-tag">av.7</span> Cancel button → discards changes and closes the view</li>
          </ul>
        </div>
      </div>
      
      {/* Edit Alarm View */}
      <div className="months-view-section">
        <div className="png-columer">
        <img src={EditAlarmView} className="months-view-example" alt="Edit Alarm View"/>
        <img src={EditDuplicateAlarmView} className="months-view-example" alt="Edit Alarm View"/>
        </div>
        <div className="months-view-docs">
          <p className="months-view-docs-label">Edit Alarm View</p>
          <ul className="months-view-list">
            <li><span className="mv-tag">ev.1</span> Date label → displays the selected date of the alarm being edited</li>
            <li><span className="mv-tag">ev.2</span> Title field → text input pre-filled with the alarm's current title</li>
            <li><span className="mv-tag">ev.3</span> Description field → multiline text input pre-filled with the alarm's current description</li>
            <li><span className="mv-tag">ev.4</span> Time field → time input pre-filled with the alarm's current scheduled time</li>
            <li><span className="mv-tag">ev.4.1</span> Clock icon → native time picker display for the time field (e.g., Add Alarm View)</li>
            <li><span className="mv-tag">ev.5</span> Repeat Until section → group containing repeat frequency options and end date</li>
            <li><span className="mv-tag">ev.6</span> Frequency toggle buttons → select repeat interval (e.g., Weekly, Yearly)</li>
            <li><span className="mv-tag">ev.7</span> End date field → date input for when the repeat should stop, with calendar icon for native date picker</li>
            <li><span className="mv-tag">ev.8</span> Confirm button → confirms the repeat settings and collapses the repeat section</li>
            <li><span className="mv-tag">ev.9</span> Cancel (repeat) button → discards repeat changes and collapses the repeat section</li>
            <li><span className="mv-tag">ev.10</span> Save button → validates and saves all edits to the alarm, closes the view</li>
            <li><span className="mv-tag">ev.11</span> Duplicate button → toggles the Repeat Until view</li>
            <li><span className="mv-tag">ev.12</span> Delete button → permanently removes the alarm for that day &amp; closes the view</li>
            <li><span className="mv-tag">ev.13</span> Cancel button → discards all changes &amp; closes the view</li>
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

      {/* Chat View */}
      <div className="chat-view-section">
        <img src={ChatView} className="chat-view-example" alt="Chat View"/>
        <div className="chat-view-docs">

          <p className="chat-view-docs-label">Chat View</p>
          <ul className="chat-view-list">

            <li><span className="mv-tag">c.1</span> Assistant message bubble → displays system or AI responses</li>
            <li><span className="mv-tag">c.2</span> Send button → sends message to chatbot</li>
            <li><span className="mv-tag">c.3</span> Calisigh Helper's message → inititate/response</li>
            <li><span className="mv-tag">c.4</span> User's message → reply/response</li>

          </ul>
        </div>
      </div>

      {/* Event View */}
      <div className="months-view-section">
        <img src={EventView} className="months-view-example" alt="Event View"/>
        <div className="months-view-docs">
          <p className="months-view-docs-label">Event View</p>
          <ul className="months-view-list">
            <li><span className="mv-tag">e.1</span> Event title → displays the alarm's title in large text</li>
            <li><span className="mv-tag">e.2</span> Event description → displays the alarm's description below the title</li>
            <li><span className="mv-tag">e.3</span> Stop Alarm button → stops the active alarm and closes the event view</li>
          </ul>
        </div>
      </div>

      
      
      <div className="custom-calendar-content">

        <div className="custom-calendar-layout-overview">
          <h2 className="custom-calendar-overview-header">
            <img src={Overview} className="overview-header" alt="Overview" />
          </h2>

          <p className="overview-body">
            <strong>Calsigh</strong> is a feature‑rich desktop application built with <strong>Tauri</strong>, 
            combining a <strong>React</strong> frontend with a 
            <strong>Maven</strong>-packaged <strong>Java</strong> backend.<br/><br/>

            The backend is distributed as a JAR that embeds a local <strong>Spark Java REST API</strong>. 
            The Rust/Tauri layer communicates with that local server to deliver calendar data to the UI.<br/><br/>

            Calsigh also includes an on‑device AI engine, <strong>Ollama 3.2</strong>, 
            which adapts to the user’s hardware to run efficiently and cost‑effectively.<br/><br/>

            The application is fully packaged with 
            <strong>Tauri</strong> and bundled with a <strong>Temurin 21 JDE
            </strong> to run the backend on the users PC.
          </p>
        </div>

        <div className="custom-calendar-layout-features">
          <h2 className="custom-calendar-features-header">
            <img src={Features} className="features-header" alt="Features" />
          </h2>
          <p className="features-body">
            • Switch between <strong>Months</strong> and <strong>Years</strong> views with a single tap on the header<br/><br/>
            • Add, view, duplicate, and remove <strong>events</strong> with titles, times, and multi-event scrolling per day cell<br/><br/>
            • Built-in <strong>AI assistant</strong> with awareness of events recorded on your calendar<br/><br/>
            • Personalize your experience with custom <strong>backgrounds</strong> (JPG, PNG, GIF, WEBP) and <strong>alert sounds</strong> (MP3, WAV, and more)<br/><br/>
            • Compact <strong>mini calendar sidebar</strong> for quick date navigation at a glance
          </p>
        </div>

        <div className="custom-calendar-layout-architecture">
          <h2 className="custom-calendar-architecture-header">
            <img src={Architecture} className="architecture-header" alt="Architecture" />
          </h2>
          <p className="architecture-body">
            React (UI)<br/>
            ↓<br/><br/>
            Tauri (Rust + WebView)<br/>
            ↓<br/><br/>
            Spark Java REST Server<br/>
            ↓<br/><br/>
            Calendar Logic (Java/JDK)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calsigh;