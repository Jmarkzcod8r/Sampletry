import React from 'react';
import './App.css';
// import Header from './Header'
// import { Helmet } from "react-helmet";
// import Hexagon from './Hexagon';
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

  return (
    <div id="App_body" className="App_body">
     {/* <head>
     <script src="https://unpkg.com/scrollreveal"></script>
     <script>
     ScrollReveal(( reset: true ));
     ScrollReveal().reveal('.headline',(delay: 5000 )));
     </script>
     </head> */}

      {/* <h1 class="headline">
    Widget Inc.
</h1> */}



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

      <div id="About_parent" class="About_parent">

      <AnimatedTitle/>
      </div>
      <div class="About_me">
      <AboutMeBox/>
    
      </div>
      
      <div id="Portfolio_container" class="Portfolio_container">
      {/* amsndbnassnd */}
      <Portfoliotitle />
      {/* <Qualifications Title="Portfolio"/> */}
      </div>

      {/* <div class="ProgrammingLogos_container">
      <ProgrammingLogos/>
      </div> */}
      
      <div class="TerminalUbuntu_container">
      <TerminalUbuntu/>
      {/* <Macbookproject/> */}
      </div>

      <div id="QualificationsTitle_container" class="QualificationsTitle_container">
      <Qualifications/>
      </div>

      <div class="Projects" Style='z-index:1000'> 
      <section class="sec-03" Style='margin-top:0px; '>
        <div class="container" Style='/* background-color:violet; */ display:flex ; padding-inline:150px '>
            {/* <h3 class="section-title " >Lorem Ipsum </h3> */}
            {/* <div class="content" Style=''> */}
            <div class="info" Style='margin-right:20px;align-items:center ; display:flex ; justify-content:center;flex-direction:column; height:100%'>
                    <h2 Style='color:  	#FF4500' class="info-title">Bible Quiz Web App</h2>
                    <p Style='font-size:18px; color:pink'><br></br>
                    This is a website I hosted with Firebase and using their database to store the questionnaires. This is inteded to be a simple bible quiz app. The theme is a light one with trasparent buttons for the choices. The front-end for this uses the react framework alongside the usage of scss. More features are to be updated. Link: 
                    <a href='https://whiteseed.live/' Style='color:green'> https://whiteseed.live/</a>
                    </p>
                </div>
                <div class="image" Style=' background-color:gray; width:2800px;'>
                {/* <iframe src="https://firebase-auth-two-new-jmarkzcod8r.vercel.app/login" title="description" Style='width:500px; height:300px '  Scrolling='yes' frameborder='0'>
                  </iframe>  */}
                  <img src={Whiteseed} alt="" Style='width:35em'/>
                </div>
               
              {/* </div> */}
          </div>
        </section>
        <section class="sec-03" Style='margin-top:50px'>
        <div class="container" Style='/* background-color:violet; */ display:flex ; padding-inline:150px '>
            {/* <h3 class="section-title " >Lorem Ipsum </h3> */}
            {/* <div class="content" Style=''> */}
            <div class="image" Style=' background-color:gray; width:2800px;'>
                {/* <iframe src="https://firebase-auth-two-new-jmarkzcod8r.vercel.app/login" title="description" Style='width:500px; height:300px '  Scrolling='yes' frameborder='0'>
                  </iframe>  */}
                  <img src={Online_Journal} alt="" Style='width:35em'/>
                </div>
            <div class="info" Style='margin-left:20px;align-items:center ; display:flex ; justify-content:center;flex-direction:column; height:'>
                   
                    <h2 Style='color:  	#FF4500' class="info-title">Online Journal Web App</h2>
                    <p Style='font-size:18px; color:pink'><br></br>
                    This is a simple online journal side project I have utilizing firebase authentication and mongodb database. A google account is needed in order for the user to login. It is deployed in vercel as the framework used for this is Nextjs. Link:
                    <a href='https://firebase-auth-two-new-jmarkzcod8r.vercel.app/' Style='color:green'> https://firebase-auth-two-new-jmarkzcod8r.vercel.app/ </a> 
                    </p>
                </div>
             
               
              {/* </div> */}
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

     
      <div id="ConnectTitle_headcontainer" class="ConnectTitle_headcontainer">
        <ConnectTitle/>
      </div>

      <div class="Connecticons_container">
        <Connecticons/>
      </div>

     





      </div>
      
      // </div> 
      



  );
}

export default App;