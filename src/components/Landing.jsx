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
    customStyle.backgroundImage = "url(" + "./img/morning.png" + ")";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon.";
    customStyle.backgroundImage = "url(" + "./img/afternoon.png" + ")";
  } else {
    greeting = "Good Night.";
    customStyle.backgroundImage = "url(" + "./img/evening.png" + ")";
  }

    return <div id="top" style={customStyle} className="top-container">
        <h1>{greeting}<br></br></h1>
        <h1>I'm <span className="name">Christina</span>.
      A <span className="title">Developer</span>.</h1>
      <a href="#about" class="meBtn" title="Link button to about section">About me</a>
    </div>
}

export default Landing;

