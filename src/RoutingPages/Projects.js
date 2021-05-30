import React from 'react';
import Kmenu from '../SiteMedia/Projects/K_menu.gif'

function Projects() {
    return (
     <div className="App-header">
        <div>
          <h2>Projects</h2>
        </div>
        <div className="Project">
          <h4>Karimu's Confectionary App</h4>
          <img src={Kmenu}  alt="Menu Ordering WebApp" ></img>
          <p>A reactive web menu app</p>
          <a href="https://confectionaries.herokuapp.com/">See Live Site</a>
          <br />
          <a href="https://github.com/KabdulDev/basic-menu">See Code</a>
        </div>
        
        
      </div>
    );
  }
export default Projects;