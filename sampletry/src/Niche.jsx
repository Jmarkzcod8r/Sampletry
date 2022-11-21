// import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Niche = (props)=> {
    return(
        <section className="Head_Points">
          <a href={props.link} Style='margin:2px; '> <h1>{props.Topic}</h1></a>  
        </section>
    )
}
export default Niche