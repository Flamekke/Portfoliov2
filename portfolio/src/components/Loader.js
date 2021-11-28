import Lottie from 'react-lottie';
import LoaderAnimation from '../asset/loader.json';
import React, {Component} from "react";
import "./Loader.css"

class Loader extends Component {

    render() {
        return(


            <div className="loader">
            <Lottie
                    options={{
                            loop: true,
                            autoplay: true,
                            animationData: LoaderAnimation,
                            rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                            }
                    }}
                    autoplay={true}
            // height={450}
            // width={450}
    
            
            /></div>






        );
    }
}


export default Loader;