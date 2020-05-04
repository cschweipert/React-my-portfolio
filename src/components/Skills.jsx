import React from "react";

function Skills() {
  return <div id="primary">
    <div id="skills" class="skills-container">
      <h2>TOOLBELT.</h2>

      {/* <h3 className="tools">My tools:</h3> */}
      <div class="grid-container">
        <ul>
          <li> Structure & Design:<br></br>
            <h4 class="h4top"><i class="fab fa-html5 skills"></i>HTML5</h4>
            <h4><i class="fab fa-css3-alt skills"></i>CSS3</h4>
            <h4>Bootstrap</h4>
          </li>
          <li>Languages:<br></br>
            <h4 class="h4top"><i class="fab fa-js-square skills"></i>JavaScript</h4>
            <h4><i class="fab fa-python skills"></i>Python</h4>
            <h4>German</h4>
          </li>
          <li>Frameworks:<br></br>
            <h4 class="h4top"><i class="fab fa-node skills"></i>Node</h4>
            <h4><i class="fab fa-react skills"></i>React</h4>
          </li>
          <li>Version Control:<br></br>
            <h4 class="h4top"><i class="fab fa-github skills"></i>GitHub</h4>
            <h4><i class="fab fa-sourcetree skills"></i>Sourcetree</h4>
          </li>
          <li>Databases:<br></br>
            <h4 class="h4top">MongoDB</h4>
            <h4>PostgreSQL</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Skills;