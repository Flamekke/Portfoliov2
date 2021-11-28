import './Home.css'
import React, { Component } from "react";
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom'
import HomeAnimation from '../asset/63487-programming-computer.json';
import Navbar from '../Navbar';
import Loader from "./Loader"

class Home extends Component {

        constructor(props) {
                super(props);
                this.state = {
                  show:false
                };
                this.state = { isLoading: true }
              }

              componentDidMount() {
                this.timer = setTimeout(() => this.setState({isLoading: false}), 1000)
              }

              showTable() {
                
              }

              nextPath(path) {
                this.props.history.push(path);
              }

        render() {
                return (
                        this.state.isLoading ? <Loader/> : <div>
                                      <Navbar/>
                                      
                                        
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

<div>
                           

                                <div class="aa">Hey, I'm <span>Valentin</span></div>
                                <div class="bb">A <span>student</span> in part-time internship <br />and a <span>Back-End developer</span>.</div>
                                <div> <Link to="/about"><button className="button">See more</button></Link>
                                </div>
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

                                        

                                        </div>



                        </div>
                );

        }
}

export default Home;