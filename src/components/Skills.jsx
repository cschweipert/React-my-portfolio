import React from "react";

function Skills() {
    return <div id="primary">
    <div id="skills" className="skills-container">
    <h2>Skills.</h2>

    <h3>What's important to me?</h3>
    <div className="grid-container">
      <ul>
        <li>
          Semantic HTML.<br></br>
          <i className="fas fa-code fa-3x skills"></i>
        </li>
        <li>Accessibility.<br></br>
          <i className="fas fa-low-vision fa-3x skills"></i>
          <i className="fas fa-deaf fa-3x skills"></i>
        </li>
        <li>
          Responsiveness.<br></br>
          <i className="fas fa-mobile-alt fa-2x skills"></i>
          <i className="fas fa-mobile-alt fa-3x skills"></i>
          <i className="fas fa-desktop fa-3x skills"></i>
        </li>
        <li>
          Fast.<br></br>
          <i className="fas fa-tachometer-alt fa-3x skills"></i>
        </li>
      </ul>
    </div>

    <h3>My tools:</h3>
    <div className="grid-container">
      <ul>
        <li>JavaScript:<br></br>
          <i className="fab fa-js-square fa-3x skills"></i>
          <i className="fab fa-node fa-3x skills"></i>
          <i class="fab fa-react fa-3x skills"></i>
        </li>
        <li>
          Design:<br></br>
          <i className="fab fa-html5 fa-3x skills"></i>
          <i className="fab fa-css3-alt fa-3x skills"></i>
          {/* <i class="fab fa-bootstrap"></i> */}
        </li>
        <li>
          Version Control:<br></br>
          <i className="fab fa-github fa-3x skills"></i>
          <i className="fab fa-sourcetree fa-3x skills"></i>
        </li>
        <li>
          Database:<br></br>
          <h4>MongoDB</h4>
        </li>
      </ul>
    </div>
    </div>
    </div>
}

export default Skills;