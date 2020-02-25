import React from "react";

function Header() {
    return <header>

<nav id="myTopnav" class="navbar navbar-expand-md topnav">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-hamburger hamburger"></i>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a id="aboutlink" class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a id="skillslink" class="nav-link" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a id="projectslink" class="nav-link" href="#projects">Project</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#resume/resume_template_tech.pdf">Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="mailto:c.schweipert@gmail.com">Get in touch</a>
      </li>
    </ul>
  </div>
</nav>

    {/* <nav id="myTopnav" className="navbar .navbar-expand-lg">
      <a id="aboutlink" href="#about" className="link">About</a>
      <a id="skillslink" href="#skills" className="link">Skills</a>
      <a id="projectslink" href="#projects" className="link">Project</a>
      <a href="resume/resume_template_tech.pdf" className="link">Resume</a>
      <a href="mailto:c.schweipert@gmail.com" className="link">Get in touch</a>
      
    </nav> */}
    </header>
}

export default Header;