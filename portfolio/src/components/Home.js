import './Home.css'
import React, {useEffect, useState, useRef} from "react";



const Home = (props) => {
    return(
        <div>
            <h1>Hey, I'm <span>Valentin</span></h1>
            <h2>A <span>student</span> in part-time internship <br/>and a <span>Back-End developer</span>.</h2>
            <button class="button">Click Me</button>

        </div>
    );
}

export default Home;