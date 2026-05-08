"use client";
import React from "react";
import wavingImage from "../assets/images/waving.png";
import htmlImage from "../assets/images/html.png";
import jsbsImage from "../assets/images/jsbs.png";
import reactNodeImage from "../assets/images/reactnode.png";
import sassImage from "../assets/images/sass.png";
// import resume from "../assets/images/resume.pdf";
const resume = process.env.PUBLIC_URL + '/resume.pdf';
const Banner = () => {
  return (
    <section id="home" className="hero hero spacing_top spacing_bottom">
      <div className="container">
        <div className="content">
          <div className="hero-main spacing_bottom">
            <div className="hero-text">
              <h1>
                <span>Senior Software Engineer</span>{" "}
                <img className="waving-hand" src={wavingImage} alt="waving_hand" />
              </h1>

              <p>
                Hi, I'm Santosh Sah. A results-driven Senior Software Engineer
                based in Chandigarh, India. 📍
              </p>
              <span className="social_icon">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/santoshsah1/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/stmsantoshsah"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <a href={resume} download="Santosh_Resume.pdf" className="btn btn-primary buttonDownload">Download CV</a>

          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img src={htmlImage} alt="skill-icon" />
                </li>
                <li>
                  <img src={jsbsImage} alt="skill-icon" />
                </li>
                <li>
                  <img src={reactNodeImage} alt="skill-icon" />
                </li>
                <li>
                  <img src={sassImage} alt="skill-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
