import React from "react";
// import Morning from "../css/morning.png";

function Landing() {

  const date = new Date();
  const currentTime = date.getHours();

  let greeting = "";

  const customStyle = {
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (currentTime < 12) {
    greeting = "Good Morning.";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon.";
  } else {
    greeting = "Good Evening.";
  }

  return <div id="top" style={customStyle} className="top-container">
    <h1 className="greeting">{greeting}<br></br></h1>
    <h1>I'm <span className="name">Christina</span>.<br></br>
      A <span className="title">Developer</span>.</h1>
    <a href="#projects" className="meBtn" title="Link button to about section">My work</a>
  </div>
}

export default Landing;

