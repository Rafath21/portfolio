import React from "react";
import "./App.css";
const Home = () => {
  return (
    <div className="main">
      <div className="banner">
        <nav className="navigation">
          <li>Home</li>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact Me</li>
          <li>Resume</li>
        </nav>
        <div className="introduction">
          <div className="bio">
            <div className="iam">Hi, I'm</div>
            <div className="name">Rafath Unnisa.</div>
            <div className="fsd">A full-stack developer based in India.</div>
            <div className="intro">
              I have a serious passion for building websites that make lives
              easier for human kind.
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="projects-title">Favorite Projects</div>
        <div className="project">
          <div className="project_info">
            <header>01. Crime Mapper</header>
            <div className="stack-used">
              <img src="./reactjs.png"></img>
              <img src="./nodejs.png"></img>
              <img src="./mongodb.png"></img>
              <img src="./expressjs.png"></img>
            </div>
            <div className="project-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              veritatis magni quos iusto nisi cum eum delectus minima ipsa! Eius
              accusantium vitae architecto amet blanditiis? Mollitia maxime
              omnis alias laudantium? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ab illum doloribus beatae saepe placeat omnis
              impedit repellendus rerum exercitationem quibusdam soluta sint eum
              facere, et, quidem eaque corrupti inventore maxime. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore nihil
              nesciunt, alias vitae quos dolorem rerum ab similique ducimus id
              nobis ut iure, eligendi mollitia earum omnis deleniti! Iusto,
              modi!
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Rafath21/crime-mapper-mern"
                target="_blank"
              >
                <img
                  src="./github.png"
                  className="github-logo"
                  title="Github link"
                />
              </a>
              <a href="https://crime-mapper.herokuapp.com/" target="_blank">
                <img
                  src="./website.png"
                  className="website-logo"
                  title="Go to website"
                />
              </a>
            </div>
          </div>
          <div className="project-video">
            <video controls autoplay="true" loop="true">
              <source src="./crime-mapper.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="project">
          <div className="project_info">
            <header>02. Social Media - clone</header>
            <div className="stack-used">
              <img src="./reactjs.png"></img>
              <img src="./nodejs.png"></img>
              <img src="./mongodb.png"></img>
              <img src="./expressjs.png"></img>
            </div>
            <div className="project-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              veritatis magni quos iusto nisi cum eum delectus minima ipsa! Eius
              accusantium vitae architecto amet blanditiis? Mollitia maxime
              omnis alias laudantium? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ab illum doloribus beatae saepe placeat omnis
              impedit repellendus rerum exercitationem quibusdam soluta sint eum
              facere, et, quidem eaque corrupti inventore maxime. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore nihil
              nesciunt, alias vitae quos dolorem rerum ab similique ducimus id
              nobis ut iure, eligendi mollitia earum omnis deleniti! Iusto,
              modi!
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Rafath21/instagram-clone-mern"
                target="_blank"
              >
                <img
                  src="./github.png"
                  className="github-logo"
                  title="Github link"
                />
              </a>
              <a
                href="https://instagramclone-byrafath.herokuapp.com/"
                target="_blank"
              >
                <img
                  src="./website.png"
                  className="website-logo"
                  title="Go to website"
                />
              </a>
            </div>
          </div>
          <div className="project-video">
            <video controls muted autoplay="true" loop="true">
              <source src="./instagram-clone.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="project">
          <div className="project_info">
            <header>03. Book Sharing- App</header>
            <div className="stack-used">
              <img src="./reactjs.png"></img>
              <img src="./nodejs.png"></img>
              <img src="./mongodb.png"></img>
              <img src="./expressjs.png"></img>
            </div>
            <div className="project-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              veritatis magni quos iusto nisi cum eum delectus minima ipsa! Eius
              accusantium vitae architecto amet blanditiis? Mollitia maxime
              omnis alias laudantium? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ab illum doloribus beatae saepe placeat omnis
              impedit repellendus rerum exercitationem quibusdam soluta sint eum
              facere, et, quidem eaque corrupti inventore maxime. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore nihil
              nesciunt, alias vitae quos dolorem rerum ab similique ducimus id
              nobis ut iure, eligendi mollitia earum omnis deleniti! Iusto,
              modi!
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Rafath21/book-sharing-system"
                target="_blank"
              >
                <img
                  src="./github.png"
                  className="github-logo"
                  title="Github link"
                />
              </a>
              <a
                href="https://booksharing-system.herokuapp.com/"
                target="_blank"
              >
                <img
                  src="./website.png"
                  className="website-logo"
                  title="Go to website"
                />
              </a>
            </div>
          </div>
          <div className="project-video">
            <video controls loop="true">
              <source src="./bookstore.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="project">
          <div className="project_info">
            <header>04. Apple website - clone</header>
            <div className="stack-used">
              <img src="./reactjs.png"></img>
              <img src="./nodejs.png"></img>
              <img src="./mongodb.png"></img>
              <img src="./expressjs.png"></img>
            </div>
            <div className="project-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              veritatis magni quos iusto nisi cum eum delectus minima ipsa! Eius
              accusantium vitae architecto amet blanditiis? Mollitia maxime
              omnis alias laudantium? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ab illum doloribus beatae saepe placeat omnis
              impedit repellendus rerum exercitationem quibusdam soluta sint eum
              facere, et, quidem eaque corrupti inventore maxime. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore nihil
              nesciunt, alias vitae quos dolorem rerum ab similique ducimus id
              nobis ut iure, eligendi mollitia earum omnis deleniti! Iusto,
              modi!
            </div>
            <div className="project-links">
              <a href="https://github.com/Rafath21/apple-clone" target="_blank">
                <img
                  src="./github.png"
                  className="github-logo"
                  title="Github link"
                />
              </a>
              <a href="https://apple-clone-3ac22.web.app/" target="_blank">
                <img
                  src="./website.png"
                  className="website-logo"
                  title="Go to website"
                />
              </a>
            </div>
          </div>
          <div className="project-video">
            <video controls autoplay="true" loop="true">
              <source src="./apple-clone.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="about-me-section">
        <header>Know Me Better</header>
        <div className="about-me-subsection">
          <div className="about-me-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ex
            hic neque corporis qui minus dicta fugit, voluptatem atque magni
            quae doloribus ea dolor at repudiandae impedit quaerat. Labore,
            iure! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet iusto, mollitia vitae inventore tempora aliquid hic sapiente
            exercitationem impedit corporis repellat molestiae voluptatum maxime
            tenetur itaque ducimus delectus officia distinctio? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Iure, cupiditate quis
            sunt fugiat beatae impedit alias consequatur. Officiis quas possimus
            optio corrupti eaque nobis exercitationem? Assumenda quas porro
            expedita tempora! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maxime soluta error eaque. Odit aperiam labore eum pariatur,
            veniam nostrum nemo, eveniet ullam, esse delectus repudiandae
            accusamus cupiditate iste sit necessitatibus.
          </div>
          <div className="about-me-picture"></div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-me">
          <header className="contact-me-title">Let's get in touch?</header>
          <div className="label">Name</div>
          <input type="text" />
          <div className="label">Email</div>
          <input type="text" />
          <div className="label">Message</div>
          <textarea></textarea>
          <button>Submit</button>
          <form></form>
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
      <div className="cta">
        <header>Also find me on:</header>
        <div className="connection-links">
          <a href="" target="_blank">
            <img
              src="./twitter-logo.png"
              className="twitter-logo"
              title="Rafath's twitter"
            />
          </a>
          <a href="" target="_blank">
            <img src="./linkedin-logo.png" title="Rafath's linkedIn" />
          </a>
          <a href="" target="_blank">
            <img src="./instagram-logo.png" title="Rafath's instagram" />
          </a>
          <a href="" target="_blank">
            <img src="./facebook-logo.png" title="Rafath's facebook" />
          </a>
          <a href="" target="_blank">
            <img src="./github-footer-logo.png" title="Rafath's github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
