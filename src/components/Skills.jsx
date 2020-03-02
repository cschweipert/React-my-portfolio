import React from "react";

function Skills() {
    return <div id="primary">
    <div id="skills" class="skills-container">
    <h2>Skills.</h2>

    <h3>What's important to me?</h3>
    <div class="grid-container">
      <ul>
        <li>
          Semantic HTML.<br></br>
          <i class="fas fa-code fa-3x skills"></i>
        </li>
        <li>
          Accessibility.<br></br>
          <i class="fas fa-low-vision fa-3x skills"></i>
          <i class="fas fa-deaf fa-3x skills"></i>
        </li>
        <li>
          Responsiveness.<br></br>
          <i class="fas fa-mobile-alt fa-2x skills"></i>
          <i class="fas fa-mobile-alt fa-3x skills"></i>
          <i class="fas fa-desktop fa-3x skills"></i>
        </li>
        <li>
          Client side performance.<br></br>
          <i class="fas fa-sync-alt fa-3x skills"></i>
        </li>
        <li>
          Fast.<br></br>
          <i class="fas fa-tachometer-alt fa-3x skills"></i>
        </li>
      </ul>
    </div>

    <h3 className="tools">My tools:</h3>
    <div class="grid-container">
      <ul>
        <li> Structure & Design:<br></br>
          <i class="fab fa-html5 fa-3x skills"></i>
          <i class="fab fa-css3-alt fa-3x skills"></i>
        </li>
        <li>Languages:<br></br>
          <i class="fab fa-js-square fa-3x skills"></i>
          <i class="fab fa-python fa-3x skills"></i>
          {/* <h4>English</h4>
          <h4>German</h4> */}
        </li>
        <li>Libraries:<br></br>
          <i class="fab fa-node fa-3x skills"></i>
          <i class="fab fa-react fa-3x skills"></i>
        </li>
        <li>Version Control:<br></br>
          <i class="fab fa-github fa-3x skills"></i>
          <i class="fab fa-sourcetree fa-3x skills"></i>
        </li>
        <li>Database:<br></br>
          <h4>MongoDB</h4>
        </li>
      </ul>
    </div>
  </div>
    </div>
}

export default Skills;