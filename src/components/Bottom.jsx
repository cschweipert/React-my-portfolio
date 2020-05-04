import React from "react";

function Bottom() {
  return <div className="bottom-container">
    <a href="https://github.com/cschweipert">
      <i className="fab fa-github fa-2x socialicon" title="icon link to github account"></i>
    </a>
    <a href="mailto:c.schweipert@gmail.com">
      <i className="fas fa-envelope fa-2x socialicon" title="icon link to linkedin"></i>
    </a>
    <a href="https://instagram.com/missseagoat">
      <i className="fab fa-instagram fa-2x socialicon" title="icon link to instagram"></i><br></br><br></br>
    </a>
    <a href="#top" className="upBtn">
      <i className="fas fa-angle-double-up fa-1x uparrow" title="link to top"></i>
    </a>
  </div>
}

export default Bottom;