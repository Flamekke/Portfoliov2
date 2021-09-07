import './Home.css'
import React, {useEffect, useState, useRef} from "react";
import Lottie from 'react-lottie';
import HomeAnimation from '../asset/18123-developer.json';



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
            <h1>Hey, I'm <span>Valentin</span></h1>
            <h2>A <span>student</span> in part-time internship <br />and a <span>Back-End developer</span>.</h2>
            <div><button className="button">See more</button></div>
            <div className="anim">
            <Lottie 
                options={defaultOptions}
                // height={450}
                // width={450}
            /></div>
    </div>
    );
}

export default Home;