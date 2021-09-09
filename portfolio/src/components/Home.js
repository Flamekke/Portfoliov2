import './Home.css'
import React, { Component } from "react";
import Lottie from 'react-lottie';
import HomeAnimation from '../asset/63487-programming-computer.json';
import About from './About';


class Home extends Component {

        constructor(props) {
                super(props);
                this.state = {
                  show:false
                };
              }

              showTable() {
                this.setState({
                  show: true
                });
              }

        render() {
                return (
                        
                        <div>
                                {
                                        !this.state.show && <div>
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
                                <div><button onClick={() => this.showTable()} className="button">See more</button></div>
                                <div className="anim">
                                        <Lottie
                                                options={{
                                                        loop: true,
                                                        autoplay: true,
                                                        animationData: HomeAnimation,
                                                        rendererSettings: {
                                                                preserveAspectRatio: "xMidYMid slice"
                                                        }
                                                }}
                                                autoplay={true}
                                        // height={450}
                                        // width={450}
                                        /></div>

                                        </div>}
                                {
                                
                                this.state.show && <About/>
                                
                                }
                        </div>
                );

        }
}

export default Home;