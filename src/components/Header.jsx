import React from "react";

function Header() {
  return <header>

    <nav id="myTopnav" class="navbar navbar-expand-md topnav">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars hamburger"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a id="projectslink" class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a id="skillslink" class="nav-link" href="#skills">Toolbelt</a>
          </li>
          <li class="nav-item">
            <a id="aboutlink" class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./resume/resume_christinaschweipert.pdf">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mailto:c.schweipert@gmail.com">Get in touch</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
}

export default Header;