import { useEffect } from "react";
import Navbar from "./Navbar.js";
import "./PopularVote.css";

// import CalisighLogo from "../resources/art/calisigh page graphics/Calisigh.gif"
import PopularVoteName from "../resources/art/popularvote page graphics/Popular Vote.gif"
import LandingView from "../resources/art/popularvote page graphics/landing-page.png";
import OpenSessionView from "../resources/art/popularvote page graphics/open-session.png";
import ResultsHostView from "../resources/art/popularvote page graphics/hosts-view-results-phase.png";
import ResultsParticipantView from "../resources/art/popularvote page graphics/participants-view-results-phase.png";

import Overview from "../resources/art/Background Project/Gradients/Overview Inactive.gif";
import Features from "../resources/art/Background Project/Gradients/Features Inactive.gif";
import Architecture from "../resources/art/Background Project/Gradients/Architecture Inactive.gif";

const PopularVote = () => {

  useEffect(() => {
    document.title = "PopularVote";
  }, []);

  return (
    <div className="popular-vote-container">
      <Navbar />

      <h1><img src={PopularVoteName} className="popularvote-calendar-name" alt="𝑃𝑜𝑝𝑢𝑙𝑎𝑟𝑉𝑜𝑡𝑒"/></h1>

      <p className="popular-vote-description">Anonymous questions, collectively surfaced.</p>
      <p className="popular-vote-description">
        Open a session, let the room ask anything, cluster the noise into signal, and respond to what actually matters.
      </p>

      {/* Landing Page */}
      <div className="popular-vote-view-section">
        <img src={LandingView} className="popular-vote-screenshot" alt="Landing Page" />
        <div className="popular-vote-view-docs">
          <p className="popular-vote-view-label">Landing Page</p>
          <ul className="popular-vote-view-list">
            <li><span className="mv-tag">lp.1</span> Your Sessions panel → lists past sessions with their status (Open, Results, Ended) and tags</li>
            <li><span className="mv-tag">lp.2</span> Create New Session button → starts a fresh session and enters the host dashboard</li>
            <li><span className="mv-tag">lp.3</span> Join a Session panel → enter a code, paste a link, or scan a QR code to join as a participant</li>
            <li><span className="mv-tag">lp.4</span> How it works → link to documentation in the top nav</li>
          </ul>
        </div>
      </div>
      
      <div className="popular-vote-view-section">
        <img src={OpenSessionView} className="popular-vote-screenshot" alt="Open Session Host" />
        <div className="popular-vote-view-docs">
          <p className="popular-vote-view-label">Host: Open Session</p>
          <ul className="popular-vote-view-list">
            <li><span className="mv-tag">os.1</span> Session code → large display of the unique code to share with your audience</li>
            <li><span className="mv-tag">os.2</span> Copy code / Copy link → quick share buttons for the session</li>
            <li><span className="mv-tag">os.3</span> QR code → scannable code participants can use to join instantly</li>
            <li><span className="mv-tag">os.4</span> Tags field → optional labels to organize or categorize the session</li>
            <li><span className="mv-tag">os.5</span> Close Submissions button → locks the session and stops new questions from coming in</li>
            <li><span className="mv-tag">os.6</span> Trigger Clustering button → runs AI grouping on all submitted questions</li>
            <li><span className="mv-tag">os.7</span> Participants / Submissions counters → live count shown in the top right</li>
          </ul>
        </div>
      </div>

      <div className="popular-vote-view-section">
        <img src={ResultsHostView} className="popular-vote-screenshot" alt="Results Host" />
        <div className="popular-vote-view-docs">
          <p className="popular-vote-view-label">Host: Results</p>
          <ul className="popular-vote-view-list">
            <li><span className="mv-tag">rh.1</span> Cluster cards → AI-grouped questions sorted by shared meaning, numbered by volume</li>
            <li><span className="mv-tag">rh.2</span> Show questions toggle → expands to reveal the individual submissions inside a cluster</li>
            <li><span className="mv-tag">rh.3</span> Response field → click to write a reply that addresses the entire cluster at once</li>
            <li><span className="mv-tag">rh.4</span> Re-cluster button → re-runs AI grouping if needed</li>
            <li><span className="mv-tag">rh.5</span> Preview Expansion → preview how results will look to participants before publishing</li>
            <li><span className="mv-tag">rh.6</span> Trigger Expansion → publishes clusters and responses to all participants</li>
            <li><span className="mv-tag">rh.7</span> End Session button → permanently closes the session</li>
          </ul>
        </div>
      </div>

      <div className="popular-vote-view-section">
        <img src={ResultsParticipantView} className="popular-vote-screenshot" alt="Results Participant" />
        <div className="popular-vote-view-docs">
          <p className="popular-vote-view-label">Participant: Results</p>
          <ul className="popular-vote-view-list">
            <li><span className="mv-tag">rp.1</span> Submit a question field → anonymously ask a question at any time during the session</li>
            <li><span className="mv-tag">rp.2</span> Character counter → shows remaining characters (500 max) below the input</li>
            <li><span className="mv-tag">rp.3</span> Your submissions → lists the questions you've personally submitted</li>
            <li><span className="mv-tag">rp.4</span> Cluster card → shows the AI-generated theme grouping your question landed in</li>
            <li><span className="mv-tag">rp.5</span> Host response → displayed in green inside the cluster once the host publishes</li>
            <li><span className="mv-tag">rp.6</span> Upvote buttons → vote on individual questions inside a cluster to surface what matters</li>
            <li><span className="mv-tag">rp.7</span> Your question indicator → highlights which submission in the cluster is yours</li>
          </ul>
        </div>
      </div>

      <div className="popular-vote-content">

        <div className="popular-vote-layout-overview">
          <h2 className="popular-vote-overview-header">
            <img src={Overview} className="overview-header" alt="Overview" />
          </h2>
          <p className="overview-body">
            <strong>PopularVote</strong> is a live anonymous Q&amp;A tool built with <strong>React</strong> and <strong>Vite</strong> on the frontend, backed by a <strong>Node.js</strong> / <strong>Express</strong> server.<br/><br/>

            Sessions are stored and synced in real time via <strong>Supabase</strong>, giving hosts and participants a live view of submissions as they come in.<br/><br/>

            Once submissions are closed, an integrated <strong>Gemini AI</strong> engine clusters similar questions together by meaning, so hosts respond to themes rather than noise.
          </p>
        </div>

        <div className="popular-vote-layout-features">
          <h2 className="popular-vote-features-header">
            <img src={Features} className="features-header" alt="Features" />
          </h2>
          <p className="features-body">
            • <strong>Anonymous submissions</strong> participants ask freely with no names or judgment<br/><br/>
            • <strong>AI-powered clustering</strong> Gemini groups similar questions into themes automatically<br/><br/>
            • <strong>Host responses</strong> write one reply per cluster, answering everyone who asked the same thing<br/><br/>
            • <strong>Live session management</strong> share via code, link, or QR code and track participants in real time<br/><br/>
            • <strong>Participant upvoting</strong> once results are live, participants upvote questions to surface what matters most
          </p>
        </div>

        <div className="popular-vote-layout-architecture">
          <h2 className="popular-vote-architecture-header">
            <img src={Architecture} className="architecture-header" alt="Architecture" />
          </h2>
          <p className="architecture-body">
            React + Vite (UI)<br/>
            ↓<br/><br/>
            Node.js / Express (API)<br/>
            ↓<br/><br/>
            Supabase<br/>
            (Database &amp; Realtime)<br/>
            ↓<br/><br/>
            Gemini AI (Clustering)
          </p>
        </div>

      </div>

    </div>
  );
};

export default PopularVote;