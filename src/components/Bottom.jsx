import React from "react";

function Bottom() {
    return <div className="bottom-container">
    <a href="#about" className="icon"><i className="fas fa-caret-up fa-4x" title="arrow button link to about section"></i></a><br></br>
    <a href="https://github.com/cschweipert">
      <i className="fab fa-github fa-3x icon" title="icon link to github account"></i>
    </a>
    <a href="https://instagram.com/missseagoat">
      <i className="fab fa-instagram fa-3x icon" title="icon link to instagram"></i><br></br><br></br>
    </a>
    <a href="#top" className="upBtn">
      <i className="fas fa-angle-double-up fa-1x uparrow" title="arrow button link to about section"></i>
    </a>
  </div>
}

export default Bottom;