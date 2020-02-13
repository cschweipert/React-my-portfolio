import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));


//Responsive Navbar
//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // stick navbar to top after scrolling
  var scrollpos = window.scrollY;
  var myTopnav = document.getElementById("myTopnav");
  var windowheight = window.innerHeight;
  var myTopnavHeight = document.getElementById("myTopnav").offsetHeight;
  
  function add_class_on_scroll() {
    myTopnav.classList.add("fixed");
  }
  
  function remove_class_on_scroll() {
    myTopnav.classList.remove("fixed");
  }
  
  window.addEventListener("scroll", function() {
    scrollpos = window.scrollY;
    if (scrollpos > (windowheight - myTopnavHeight)) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
  
  // add active class
  var about = document.getElementById("about");
  var aboutlink = document.getElementById("aboutlink");
  var aboutOffset = about.offsetTop;
  var skills = document.getElementById("skills");
  var skillslink = document.getElementById("skillslink");
  var skillsOffset = skills.offsetTop;
  var projects = document.getElementById("projects");
  var projectslink = document.getElementById("projectslink");
  var projectsOffset = projects.offsetTop;
  
  function addActiveClassOnClick() {
    aboutlink.addEventListener("click");
    aboutlink.classList.add("active");
  }
  
  function addActiveClassToSkills() {
    skillslink.addEventListener("click");
    skillslink.classList.add("active");
  }
  
  function addActiveClass() {
    projectslink.addEventListener("click");
    projectslink.classList.add("active");
  }
  
  // add/ remove active class on scroll
  console.log(window.pageYOffset);
  console.log(aboutOffset);
  console.log(skillsOffset);
  console.log(projectsOffset);
  
  window.onscroll = function() {
    if(window.pageYOffset >= aboutOffset) {
      aboutlink.classList.add("active");
    } else {
      aboutlink.classList.remove("active");
    }
  
    if(window.pageYOffset >= skillsOffset) {
      aboutlink.classList.remove("active");
      skillslink.classList.add("active");
    } else {
      skillslink.classList.remove("active");
    }
  
    if(window.pageYOffset >= projectsOffset) {
      skillslink.classList.remove("active");
      projectslink.classList.add("active");
    } else {
      projectslink.classList.remove("active");
    }
  };
