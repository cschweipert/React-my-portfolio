import React from "react";

function Projects() {
  return <div id="primary">
    <div id="projects" class="container">
      <h2>PROJECTS.</h2>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="listing-heading text-center">
                <h3>Fruitsharing App <a class="gitlink" href="https://github.com/cschweipert/fruitshare"><i
                  class="fab fa-github"></i></a></h3>
              </div>
              <hr></hr>
              <div class="row py-2 text-secondary">
                <div class="col-6">
                  <i class="fab fa-js-square"></i> JavaScript</div>
                <div class="col-6">
                  <i class="fab fa-node"></i> Node/ Express</div>
              </div>
              <div class="row py-2 text-secondary">
                <div class="col-6">
                  Esri API</div>
                <div class="col-6">
                  MongoDB</div>
              </div>
            </div>
            <a href="https://bearsmart.herokuapp.com" class="projectBtn" title="Link to fruitsharing app"></a>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="listing-heading text-center">
                <h3>Real Estate Website <a class="gitlink"
                  href="https://github.com/cschweipert/django-horizon-property"><i class="fab fa-github"></i></a></h3>
              </div>
              <hr></hr>
              <div class="row py-2 text-secondary">
                <div class="col-6">
                  <i class="fab fa-python"></i> Python</div>
                <div class="col-6">
                  <i class=""></i> Django</div>
              </div>
              <div class="row py-2 text-secondary">
                <div class="col-6">
                  MLS Plugin</div>
                <div class="col-6">
                  PostgreSQL</div>
              </div>
            </div>
            <a href="http://horizondurango.com/" class="horizonBtn" title="Link button to fruitshare webapp"></a>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default Projects;