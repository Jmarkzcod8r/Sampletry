import React from 'react';
import './Connecticons.scss';
// import codepenlogo from './connect_logos/codepenlogo.png';
import githubicon from './connect_logos/Github.png';
import linkedinicon from './connect_logos/Linkedinicon.png';
import facebookicon from './connect_logos/facebookicon.png';
import instagramicon from './connect_logos/instagramicon.png';

function Connecticons() {
    return (
      
     
      <div class="social-icons">

      <a class="social-icon social-icon--facebook" href="https://www.facebook.com/jaymark.gutierrez.5">
    <i class="fa fa-facebook"></i>
    <div class="tooltip">Facebook</div>
    <img class="facebookicon" src={facebookicon} alt="facebookicon"></img>
  </a>

  <a class="social-icon social-icon--linkedin" href="https://www.linkedin.com/in/jm-gutierrez-b70492244/">
    <i class="fa fa-linkedin"></i>
    <div class="tooltip">LinkedIn</div>
    <img class="linkedinicon" src={linkedinicon} alt="linkedinicon"></img>
  </a>



 
  <a class="social-icon social-icon--github" href="https://github.com/Jmarkzcod8r">
    <i class="fa fa-github"></i>
    <div class="tooltip">Github</div>
    <img class="githubicon" src={githubicon} alt="githubicon"></img>
  </a>
  {/* <a class="social-icon social-icon--twitter">
    <i class="fa fa-twitter"></i>
    <div class="tooltip">Twitter</div>
  </a>
  <a class="social-icon social-icon--dribbble">
    <i class="fa fa-dribbble"></i>
    <div class="tooltip">Dribbble</div>
  </a> */}
  <a class="social-icon social-icon--instagram" href="https://www.instagram.com/jmarkz_008/">
    <i class="fa fa-instagram"></i>
    <div class="tooltip">Instagram</div>
    <img class="instagramicon" src={instagramicon} alt="instagramicon" href="https://www.instagram.com/jmarkz_008/"></img>
  </a>
  
{/*  
  <a class="social-icon social-icon--codepen" href="http://www.youtube.com">
    <i class="fa fa-codepen"></i>
    <div class="tooltip">Codepen</div>
    <img class="codepenlogo" src={codepenlogo} alt="codepenlogo"></img>
  </a> */}
</div>
    
    );
  }
  
  export default Connecticons;
  