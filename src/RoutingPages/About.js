import React from 'react';
import Headshot from '../SiteMedia/Headshots/Headshot.jpeg';

function About() {
  return (
    <div>
      
      <header className="App-header">
          <img src={Headshot} alt="Karimu Mohammed Headshot" />
          <p>
            A full stack developer seeking to provide custom solutions for client problems.
          </p>
          
        </header>
      
    </div>
  );
  }
export default About;