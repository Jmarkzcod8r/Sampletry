import React from 'react';
import './App.css';
// import Pythonlogo from './connect_logos/pythonlogo.png'
// import './slider.scss'
import Slider from './Slider';
// import Header from './Header'
// import { Helmet } from "react-helmet";
// import Hexagon from './Hexagon';
// import LightSpeed from 'react-reveal/LightSpeed';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


import {LightSpeed, HeadShake, Jello, Pulse, RubberBand, Shake, Spin,Swing,Tada,Wobble } from 'react-reveal';


import Niche from './Niche';

import Me from './Me.jpg';

import city_lights from './city_lights.jpg';
import Forportfoliorb from './Forportfoliorb.png';
import pwkeeperone from './pwkeeperone.png';
import pwkeeperoneone from './pwkeeperoneone.png';
import Whiteseed from './Whiteseed-live.png'
import Online_Journal from './Online_Journal.png'

import TitleforMe from './TitleforMe';
import AnimatedTitle from './AnimatedTitle';
import AboutMeBox from './AboutMeBox';
import Qualifications from './Qualifications';
import ProgrammingLogos from './ProgrammingLogos';
import TerminalUbuntu from './TerminalUbuntu';
import Macbookproject from './Macbookproject';
import Portfoliotitle from './Portfoliotitle';
import TerminalUbuntumini from './TerminalUbuntumini';
import ConnectTitle from './ConnectTitle';
import Connecticons from './Connecticons';




function App(Topic,Message, link, Title) {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var revealsx = document.querySelectorAll(".revealx");
    var revealsr = document.querySelectorAll(".revealr");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    for (var i = 0; i < revealsx.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealsx[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealsx[i].classList.add("active");
      } else {
        revealsx[i].classList.remove("active");
      }
    }

    for (var i = 0; i < revealsr.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealsr[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealsr[i].classList.add("active");
      } else {
        revealsr[i].classList.remove("active");
      }
    }



  }
  
  window.addEventListener("scroll", reveal);


  return (
    <div id="App_body" className="App_body">
    
      <div className='Container_city-lights'>
      <img src={city_lights} className="App-city_lights" alt="city_lights" />
      </div>

    <div id="Parent_container" className="Parent_container">
    
      <Niche Topic = "Home"  link="#App_body"/>
      <Niche Topic = "About" link="#About_parent"/>
      <Niche Topic = "Qualifications" link="#QualificationsTitle_container"/>
      <Niche Topic = "Projects" link="#Portfolio_container"/>
      <Niche Topic = "Connect" link="#ConnectTitle_headcontainer"/>
          
    </div>
      <div className="TitleforMe_container">
              <TitleforMe/> 
      </div>
      
     
      <div class="photo_container">
     
      <img src={Me} className="App-Me" alt="Me" />
    
      </div>

      <div id="About_parent" class="About_parent revealx">
      <AnimatedTitle/>
      </div>

      <div class="About_me ">
       <Zoom>      <AboutMeBox/></Zoom>

      </div>
      
      <div id="Portfolio_container" class="Portfolio_container revealx">
      <Portfoliotitle />
     
      {/* <Qualifications Title="Portfolio"/> */}
      </div>

      {/* <div class="ProgrammingLogos_container">
      <ProgrammingLogos/>
      </div> */}
     
      <div class="TerminalUbuntu_container reveal">
      <TerminalUbuntu/>
      </div>
      {/* <div><Slider/></div> */}
      <section class='section-slide' Style=' position:relative; top:56rem; height:8rem;padding:1rem '>
      <Slider/>
      {/* <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="100" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>     */}

        </section>
     
      <div id="QualificationsTitle_container" class="QualificationsTitle_container revealx ">
     <LightSpeed>
      <Qualifications/>
      </LightSpeed>
      </div>
     
      <div class="Projects " Style='z-index:1000;  top:100rem;'> 
      <section class="sec-03 " Style='margin-top:0px; '>
        <div class="container" Style=' display:flex ; padding-inline:150px '>
      
            <div class="info" Style='margin-right:30px;align-items:center ; display:flex ; justify-content:center;flex-direction:column; height:100%'>
                    <Jump>
                    <h2 Style='color:  	#FF4500' class="info-title">Bible Quiz Web App</h2>
                    <p Style='font-size:18px; color:pink'><br></br>
                    This is a website I hosted with Firebase and using their database to store the questionnaires. This is inteded to be a simple bible quiz app. The theme is a light one with trasparent buttons for the choices. The front-end for this uses the react framework alongside the usage of scss. More features are to be updated. Link: 
                    <a href='https://whiteseed.live/' target="_blank" Style='color:green'> https://whiteseed.live/</a>
                    </p></Jump>
                </div>
                <div class="image revealr" Style=' background-color:gray; width:2800px; display:flex'>
              
                   <a href='https://whiteseed.live/' target="_blank">
                  <img class='whiteseed-img' src={Whiteseed} alt="" Style='width:35em; height:100%'/>
                  </a>
                </div>
               
           
          </div>
        </section>
        <section class="sec-03  " Style='margin-top:120px; '>
        <div class="container" Style='display:flex ; padding-inline:150px '>
           
            <div class="image revealx" Style=' background-color:gray; width:2800px; display:flex'>
             
                  <a href="https://firebase-auth-two-new-jmarkzcod8r.vercel.app/" target="_blank">
                  <img class='online-journal-img ' src={Online_Journal} alt="" Style='width:35em;height:100%'/>
                  </a>
                </div>
            <div class="info" Style='margin-left:30px;align-items:center ; display:flex ; justify-content:center;flex-direction:column; height:'>
                   <Jump>
                    <h2 Style='color:  	#FF4500' class="info-title">Online Journal Web App</h2>
                   <p Style='font-size:18px; color:pink'><br></br>
                    This is a simple online journal side project I have utilizing firebase authentication and mongodb database. A google account is needed in order for the user to login. It is deployed in vercel as the framework used for this is Nextjs. Link:
                    <a href='https://firebase-auth-two-new-jmarkzcod8r.vercel.app/'  target="_blank" Style='color:green'> https://firebase-auth-two-new-jmarkzcod8r.vercel.app/ </a> 
                    </p></Jump>
                </div>
             
               
         
          </div>
        </section>
      
      
      </div>

      {/* <div id="Projects_container" class="Projects_container"> */}
      {/* <div className='bg-red-400'></div> */}
      {/* <div class="rb_title"> */}
      {/* <div class="rb_title1">RED BUBBLE <br/>AUTOMATED UPLOADER</div>
      
      {/* <div/> */}
      
      {/* <img src={Forportfoliorb} class="Projects_container_Forportfolio" alt="Forportfolio"></img> */}
      {/* <Macbookproject/>  */}
      
  
      {/* <TerminalUbuntumini Topic="
      // This is a graphical user interface that lets you costumize your designs easily and once you’ve done that, you can proceed to uploading them automatically. This program has a mirrored vibe with the red bubble interface in the web. The title, description and tags boxes are positioned similarly. This all falls in the print on demand sphere." 
      //   Message="Normally, it would be time consuming to upoad from one design to another. I saw that it can be often be frustrating and tiring doing the same things over again and so, I slowly built this code to assist me in such a task. This now removes the limit that other similar subscription-based options one can scan on the internet."
      //   link="https://github.com/Jmarkzcod8r/Red-Bubble-Uploader-GUI"

        /> */}


      {/* </div> */}

      {/* <div class="Projects_container2"> */}
      {/* <div class="pk_title">BASIC PASSWORD <br/>KEEPER</div> */}
      {/* <img src={pwkeeperone} class="Projects_container2_pwkeeperone" alt="pwkeeperone"></img> */}
      {/* <img src={pwkeeperoneone} class="Projects_container2_pwkeeperoneone" alt="pwkeeperoneone"></img> */}
      {/* <Macbookproject/> */}
  

      {/* <TerminalUbuntumini Topic="
      This is graphical user interface that lets you store your different login credentials from various websites with ease. It eliminates if not lessen the number of failed attempts we often have when logging to our account for that particular site. It's like an alternate version of google password manager. You simply choose from the list and choose what emaiil you wish to see your designated password on.  " 
        Message="Just like other applications, this is always open for new improvements."
        link="https://github.com/Jmarkzcod8r/Passwork-Keeper"
      /> */}
  
      {/* </div> */}

     
      <div id="ConnectTitle_headcontainer" class="ConnectTitle_headcontainer revealx"
            Style=' top:160em;'>
        <ConnectTitle/>
      </div>

      <div class="Connecticons_container"
            Style='top:170em; margin-top:30px'>
        <Connecticons/>
      </div>

     





      </div>
      
      // </div> 
      



  );
}

export default App;