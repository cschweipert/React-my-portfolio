import React from "react";

function Projects() {
    return <div id="projects" className="project-container">
    <h2>Project.</h2>
    <p className="projectp">This project was inpired by bears. I live in a small mountain town in the foothills of the San Juans in Colorado. We love our bears and want to keep them safe. If we don't have time to pick our fruit, the bears will come to town to pick it
      for us. That's not safe for
      bears or humans. The idea of this project is that fruit tree owners can put their trees on a map for others to see so they can get help to pick the fruit.
      Everybear wins. If the user clicks on the points, a popup will inform her about the type of fruit and location.
      <br></br><br></br>This app was built with <i className="fas fa-heart heart"></i> and the help of Node Express, MongoDB, the Esri JavaScript API and EJS Template. It is hosted on MongoDB Atlas and Heroku. My code is public on  
      <a className="gitlink" href="https://github.com/cschweipert/fruitshare"> GitHub</a>.</p>
    <a href="https://bearsmart.herokuapp.com" className="projectBtn" title="Link button to fruitshare webapp">Check it out <i className="fas fa-angle-double-right sidearrow"></i></a>
  </div>
}

export default Projects;