import React from "react";
import { useRef } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import emailjs from "emailjs-com";
import data from "./data";
import { useState } from "react";
const Home = () => {
  let [menuOpen, setmenuOpen] = useState(false);
  let form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert("Email sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="main">
      <div className="banner">
        <Particles
          className="particles"
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#121318",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 7,
                  opacity: 0.8,
                  size: 30,
                },
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <img src="./new-logo.png" className="logo" />
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#about-me">
            <li>About Me</li>
          </a>
          <a href="#contact-me">
            <li>Contact Me</li>
          </a>
        </nav>
        <i
          class="fas fa-bars"
          id="menu"
          onClick={() => {
            if (!menuOpen) setmenuOpen(true);
            else setmenuOpen(false);
          }}
        ></i>
        <a id="home">
          <div className="introduction">
            <div className="bio">
              <div className="iam">Hi, I'm</div>
              <div className="name">Rafath Unnisa.</div>
              <div className="fsd">A full-stack developer based in India.</div>
              <div className="intro">
                I have a serious passion for building websites. My mission is to
                use code to bring to life the ideas that can have a great and
                positive impact on people's lives.
              </div>
              <a
                href="https://drive.google.com/file/d/1OUpahYEGJ7Wmqb16gNnjZBFEPMmFlARv/view?usp=sharing"
                target="_blank"
              >
                <button>Resume</button>
              </a>
            </div>
          </div>
        </a>
      </div>
      <a id="projects">
        <div className="projects">
          <div className="projects-title">Favorite Projects</div>
          {data?.map((project) => {
            return (
              <div className="project">
                <div className="project_info">
                  <header>
                    {project.serialNo} {project.projectTitle}
                  </header>
                  <div className="stack-used">
                    {project.stackUsed.map((stack) => {
                      let title = stack.split(".")[1];
                      title = title.split("/")[1];
                      return <img src={stack} title={title}></img>;
                    })}
                  </div>
                  <div className="project-details">
                    <>
                      <h5>Goal:</h5>
                      <p>{project.goal}</p>
                      <h5>Features:</h5>
                      <ul>
                        {project.features.map((feature) => {
                          return <li>{feature}</li>;
                        })}
                      </ul>
                    </>
                  </div>

                  <div className="project-links">
                    <a href={project.links[0]} target="_blank">
                      <img
                        src="./github.png"
                        className="github-logo"
                        title="Github link"
                      />
                    </a>
                    <a href={project.links[1]} target="_blank">
                      <img
                        src="./website.png"
                        className="website-logo"
                        title="Go to website"
                      />
                    </a>
                  </div>
                  <br></br>
                  {project.projectTitle == "Social Media - clone" ? (
                    <>
                      <p className="firebase-link">
                        The firebase version of this website can be found
                        <a
                          target="_blank"
                          href="https://instagram-clone-dfad6.web.app/"
                        >
                          here
                        </a>
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="project-video">
                  <video controls muted autoplay="true" loop="true">
                    <source src={project.video} type="video/mp4"></source>
                  </video>
                </div>
              </div>
            );
          })}
        </div>
      </a>
      <a id="about-me">
        <div className="about-me-section">
          <header>Know Me Better</header>
          <div className="about-me-subsection">
            <div className="about-me-info">
              Graduated with an <b>8.4 cgpa</b> in Computer Science Engineering
              from MJCET, Hyderabad (2017-2021).<br></br>
              Like every programmer, I had my "That's it. This is what I wanna
              do for the rest of my life" moment too. With a 96% in 12th
              standard, I was a teenager with the vision to do something that
              makes a difference.<br></br>
              <br></br>
              As a programmer, my focus is always on building the{" "}
              <b>most efficient and robust applications</b>. With a big
              application, comes a huge responsibility of solving problems
              efficiently and making it as robust as possible to make sure it
              doesn't crash at any point in time. With the wide range of
              projects I've built <b>over the past 4-5 years</b>, I've learned
              the art of solving unexpected errors and handling them so that the
              user knows what went wrong and where. An example of which can be
              found{" "}
              <a
                href="https://github.com/Rafath21/instagram-clone-firebase/blob/main/tests.txt"
                target="_blank"
              >
                here
              </a>
              . I also make sure the code is{" "}
              <b>readable, clean, and maintainable</b> for other developers to
              understand with ease. Also, I took my developer
              <b>
                {" "}
                training from industry experts at{" "}
                <a href="https://pepcoding.com/" target="_blank">
                  Pepcoding
                </a>{" "}
                for about a year
              </b>{" "}
              in my last year of Engineering which enabled me to gain enough
              skills to make usable and maintainable full-stack applications.
              <br></br>
              <br></br>
              Though I'm a full-stack developer who specializes in MERN stack, I
              have also built projects in java. From some mini projects like a
              basic calculator using collections and swing framework and a
              university management system using <b>JDBC and MySQL</b> to
              writing the frontend of an <b>e-commerce android application</b>{" "}
              using firebase in the early years of my engineering. I love
              bringing ideas to life using code. It's a very satisfactory
              feeling when you know the project you built can help millions of
              people out there. After all, programming is just a tool, the real
              challenge is to solve problems that we face in our day-to-day
              lives.<br></br>
              As a student, I was also a part of the Governing body of{" "}
              <b>Computer Society of India, MJCET</b>. This gave me a lot of
              opportunities to organize technical events and hackathons at
              college with hunderds of students participating. I've served as
              the{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1h5bqlkLc-Vx5mk7NKj6UQrEcz9fUAqod/view?usp=sharing"
              >
                Bulletin
              </a>{" "}
              and Editorial Head of the department for 2 years.
            </div>
            <div className="about-me-picture">
              <img src="./rafath.jpg" className="myImg" />
            </div>
          </div>
        </div>
      </a>
      <a id="contact-me">
        <div className="contact-section">
          <div className="contact-me">
            <header className="contact-me-title">Let's get in touch?</header>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <br></br>
              <input type="text" name="user_name" />
              <br></br>
              <label>Email</label>
              <br></br>
              <input type="email" name="user_email" /> <br></br>
              <label>Message</label> <br></br>
              <textarea name="message" />
              <input type="submit" value="Send" className="submit-btn" />
            </form>
          </div>
          <div className="other-details">
            <div className="other-details-1">
              <img src="./mail-logo.png" className="contact" />
              <p>rafathsweb@gmail.com</p>
            </div>
            <div className="other-details-2">
              <img src="./location-icon.png" className="contact" />
              <p>Hyderabad, India.</p>
            </div>
          </div>
        </div>
      </a>
      <div className="cta">
        <header>Also find me on:</header>
        <div className="connection-links">
          <a
            href="https://twitter.com/rafathsweb?t=9qiD6P0gHQglsZnoVxfl2w&s=08"
            target="_blank"
          >
            <img
              src="./twitter-logo.png"
              className="twitter-logo"
              title="Rafath's twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rafath-unnisa-45b0bb227/"
            target="_blank"
          >
            <img src="./linkedin-logo.png" title="Rafath's linkedIn" />
          </a>
          <a href="https://www.instagram.com/ob_liv_ious71/" target="_blank">
            <img src="./instagram-logo.png" title="Rafath's instagram" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100075021013638"
            target="_blank"
          >
            <img src="./facebook-logo.png" title="Rafath's facebook" />
          </a>
          <a href="https://github.com/Rafath21" target="_blank">
            <img src="./github-footer-logo.png" title="Rafath's github" />
          </a>
        </div>
      </div>
      <p className="madeby">Made by Rafath with ❤ and Reactjs.</p>
      <p className="copyright">Copyright &copy; 2021. All rights reserved.</p>
    </div>
  );
};

export default Home;
