import './Home.css'
import React, {useEffect, useState, useRef} from "react";
import Lottie from 'react-lottie';
import HomeAnimation from '../asset/63487-programming-computer.json';



const Home = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HomeAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return(
        <div>
        
          


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

            </ul>
    </div >

    <h1>Hey, I'm <span>Valentin</span></h1>
            <h2>A <span>student</span> in part-time internship <br />and a <span>Back-End developer</span>.</h2>
            <div><button className="button">See more</button></div>
    <div className="anim">
            <Lottie 
                options={defaultOptions}
                autoplay={true}
                // height={450}
                // width={450}
            /></div>
            
    </div>
    );
}

export default Home;