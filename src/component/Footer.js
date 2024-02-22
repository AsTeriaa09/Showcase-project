import React from "react";
import "./Footer.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="upper-section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptatem
        dolorem. Minima molestiae vel illo eos alias quibusdam maiores modi
        quidem sleniti{" "}
      </div>
      <div className="lower-section">
        <div className="main-box">
          <div className="box">
            <div className="logo-section">
              <h2>
                {" "}
                <span className="lower-section-text">EZ</span>PROMPT
              </h2>
              <p>
                Join our vibrant community of creators and share your responses
                to our prompts for feedback, encouragement, and inspiration! our
                prompts are the perfect springboard for your next masterpiece.
              </p>
            </div>

            <div className="created-by-section">
              <h2>Created by</h2>
              <div className="border-bottom"></div>
              <div className="created-by">
                <div className="created-by-first">
                  <h3>Siratul Islam</h3>
                  <p>Software Developer</p>
                  <div className="social-icons">
                    <a href="https://github.com/Siratul804" target="_blank">
                      {" "}
                      <SiGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/siratulislam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a href="">
                      {" "}
                      <FaStackOverflow />
                    </a>
                  </div>
                </div>
                <div className="created-by-first">
                  <h3>Sultana Rupa</h3>
                  <p>Software Developer</p>
                  <div className="social-icons">
                    <a href="https://github.com/AsTeriaa09" target="_blank">
                      {" "}
                      <SiGithub />
                    </a>
                    <a href="">
                      {" "}
                      <FaLinkedin />
                    </a>
                    <a href="">
                      {" "}
                      <FaStackOverflow />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-hr">
            <hr />
          </div>
          <div className="copyright">
            <p>
              Copyright <span>©</span> PromptSquad | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
