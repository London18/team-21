import React from 'react';

export default function Header() {
  return (
    <div id="header">
      <div className="top">
        <div id="logo">
          <span className="image avatar48">
            <img src="images/avatar.jpg" alt="" />
          </span>
          <h1 id="title">Jane Doe</h1>
          <p>Hyperspace Engineer</p>
        </div>

        <nav id="nav">
          <ul>
            <li>
              <a href="#top" id="top-link">
                <span className="icon fa-home">Intro</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" id="portfolio-link">
                <span className="icon fa-th">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#about" id="about-link">
                <span className="icon fa-user">About Me</span>
              </a>
            </li>
            <li>
              <a href="#contact" id="contact-link">
                <span className="icon fa-envelope">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom">
        {/* <!-- Social Icons --> */}
        {/* <ul class="icons">
      <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
      <li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
      <li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
      <li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
    </ul> */}
      </div>
    </div>
  );
}
