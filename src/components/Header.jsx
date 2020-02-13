import React from "react";

function Header() {
    return <header>
    <nav id="myTopnav" className="topnav">
      <a id="aboutlink" href="#about" className="link">About</a>
      <a id="skillslink" href="#skills" className="link">Skills</a>
      <a id="projectslink" href="#projects" className="link">Project</a>
      <a href="resume/resume_template_tech.pdf" className="link">Resume</a>
      <a href="mailto:c.schweipert@gmail.com" className="link">Get in touch</a>
      <a href="javascript:void(0);" className="icon" onclick="myFunction()">
        <i className="fa fa-bars"></i>
      </a>
    </nav>
    </header>
}

export default Header;