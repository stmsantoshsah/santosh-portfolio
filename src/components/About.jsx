import React from "react";
import "../scss/Global.scss";
import workingImage from "../assets/images/working-emoji.png";
import aboutImage from "../assets/images/about-img.webp";
import textImage from "../assets/images/text.svg";

const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "SCSS"];

const About = () => {
  return (
    <section className="about spacing_top spacing_bottom" id="about">
      <div className="container">
        <div className="about-content">
          {/* Image Section */}
          <div className="img-side">
            <img src={workingImage} alt="Working Emoji" className="work-emoji" loading="lazy" />
            <img src={aboutImage} alt="Santosh Sah - Front-end Developer" className="img-side__main-img" loading="lazy" />
            <span>
              <img src={textImage} alt="Decorative Text Element" loading="lazy" />
            </span>
          </div>

          {/* Text Section */}
          <div className="text-side">
            <h3 className="section-title">About me</h3>
            <h2 className="section-subtitle">
              A Senior Software Engineer <br /> based in Chandigarh, India📍
            </h2>

            <p>
              As a **Senior Software Engineer** with **5 years of experience**, I have strong skills in{" "}
              {skills.map((skill, index) => (
                <strong key={index}>{(index ? ", " : "") + skill}</strong>
              ))}.
              I specialize in building scalable enterprise SaaS platforms and high-performance AI intelligence pipelines.
            </p>
            <p>
              My goal is to write efficient, maintainable code and use the latest technologies to build fast,
              accessible, and engaging web applications. I am always excited to learn new tools and techniques
              to improve my development process.
            </p>
            <p>
              I believe in collaborating closely with teams to bring ideas to life and ensure the best user experience.
              Whether it’s designing new features or fixing bugs, I stay focused on delivering high-quality results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
