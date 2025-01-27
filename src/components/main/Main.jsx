import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trips</p>
            <img src={assets.compass_icon} alt="compass_icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="compass_icon" />
          </div>
          <div className="card">
            <p>Brainstorming team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="compass_icon" />
          </div>
          <div className="card">
            <p>Improve the reliability of the following code</p>
            <img src={assets.code_icon} alt="compass_icon" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Ask Gemini" />
            <div className="icons">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display search results from the web, but it does not
            guarantee the accuracy of any information provided by Gemini .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
