import React from 'react';
import './TerminalUbuntumini.css';

const TerminalUbuntumini = (props) => {
    return (
      <div>
        
<a href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</a>

<div class="mainmini">
	{/* <div class="bar">
		<i class="fa fa-times" aria-hidden="true"></i>
		<i class="fa fa-window-minimize" aria-hidden="true"></i>
		<i class="fa fa-window-maximize " aria-hidden="true"></i>
		
	</div> */}
	<div class="terminalmini"> 
	
	<span id="one">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.Topic}

	<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.Message}
	<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	<a href={props.link}>Click for more details</a>
	
	
	 </span><span id="tow"></span>
	</div>
</div>




      </div>
    )
  }

export default TerminalUbuntumini