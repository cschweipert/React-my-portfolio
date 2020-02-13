import React from "react";

function Landing() {

  const date = new Date();
  const currentTime = date.getHours();

  let greeting = "";

  const customStyle = {
    color: "",
    backgroundImage: "",
  };
  
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

    return <div id="top" className="top-container">
        <h1 style={customStyle}>{greeting}<br></br>
        I'm <span className="name">Christina Schweipert</span>.<br></br>
      A <span className="title">Developer</span>.</h1>
      <a href="#about" class="meBtn" title="Link button to about section">About me</a>
    </div>
}

export default Landing;

