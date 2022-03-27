import React, {Component} from "react";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Navbar from "../Navbar";
import { Link } from 'react-router-dom'
import Loader from "./Loader"
class About extends Component {


    constructor() {
        super();
        this.state = { isLoading: true }
    }

    isLoading;

    componentDidMount() {
        this.timer = setTimeout(() => this.setState({isLoading: false}), 1000)
      }
      

      
      showTable() {
        this.setState({
          show: true
        });
      }
      

      
    render() {

        
    return (
        this.state.isLoading ? <Loader/>: <div>
                                                  <Navbar/>
                                                  <link href='https://fonts.googleapis.com/css?family=Lato|Roboto:400,900' rel='stylesheet' type='text/css'/>
                                                  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>



                    {/* <div class="title">
                    </div> */}
                    
                    <div class="par">
                        <div class="aa" style={{marginTop:"20px"}}>About <span>me</span></div>
                        <div class="bb">My name is Valentin LYON, I am a 4th year student at <br/> Epitech Marseille and a backend developer at<br/>Instapro Group (Travaux.com, Werkspot.nl, MyHammer.de, MyHammer.at, Instapro.it)</div>                        

                        <a href="http://marcel-pirnay.be/" class="btn">
  <svg width="277" height="62">
    <defs>
        <linearGradient id="grad1">
            <stop offset="0%" stop-color="#FF8282"/>
            <stop offset="100%" stop-color="#E178ED" />
        </linearGradient>
    </defs>
     <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
  </svg>
<Link to="/projects"><svg width="277" height="62"/><span>See some projects <FontAwesomeIcon icon={faArrowRight} style={{color:"#E57ADE", position:"relative"}}/> </span> </Link>
</a>
<div class="wrapper">
        <div class="card">
            <input type="checkbox" id="card1" class="more" aria-hidden="true"/>
            <div class="content">
                <div class="front">
                    <div class="inner">
                        <div className='cardTitle'>Experiences</div>

                        <label for="card1" class="button2" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div className='jobTitle' style={{paddingTop:0}}>Back-End developer</div>
                    <div className='jobTitle' style={{paddingTop:164, position:'absolute', paddingLeft: 22}}>System administrator</div>
                    <div className='jobTitle' style={{paddingTop:240, position:'absolute', paddingLeft: 22}}>Web Developer</div>


                        {/* <div class="info">
                            <span>5</span>
                            <div class="icon">
                            <i class="fas fa-users"></i>
                                <span>people</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>4</span>
                            <div class="icon">
                                <i class="fas fa-door-open"></i>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>3</span>
                            <div class="icon">
                                <i class="fas fa-bed"></i>
                                <span>beds</span>
                            </div>
                        </div> */}
                        {/* <div class="info">
                            <span>1</span>
                            <div class="icon">
                                <i class="fas fa-bath"></i>
                                <span>bath</span>
                            </div>
                        </div> */}
                        {/* <div class="description">
                            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</div>
                            <div className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                tenetur nemo amet temporibus, enim soluta nam, debitis.</div>
                        </div> */}
                        <div class="location" style={{paddingTop:10}}>Travaux.com | Jan 2021 - today</div>
                        <div class="location" style={{paddingTop:110, position:'absolute'}}>Travaux.com | Sep 2019 - Jan 2020</div>
                        <div class="location" style={{paddingTop:185, position:'absolute'}}>Auto Ecole Jenft | Dec 2018 - Jan 2019</div>


                        {/* <div class="price">January 2021 - Today</div> */}
                        <label for="card1" class="button2 return" aria-hidden="true">
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </label>
                        
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
        <div class="card">
            <input type="checkbox" id="card2" class="more"/>
            <div class="content">
                <div class="front">
                    <div class="inner">
                        <div className='cardTitle'>Formations</div>
     
                        <label for="card2" class="button2" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                <div class="inner">
                    <div className='degree' style={{paddingLeft:-30}}>Software Architect</div>
                    <div className='degree' style={{paddingTop:165, position:'absolute', paddingLeft: 20}}>Web and mobile project manager</div>
                    <div className='degree' style={{paddingTop:245, position:'absolute', paddingLeft: 20}}>Engineering science</div>


                        {/* <div class="info">
                            <span>5</span>
                            <div class="icon">
                            <i class="fas fa-users"></i>
                                <span>people</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>4</span>
                            <div class="icon">
                                <i class="fas fa-door-open"></i>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>3</span>
                            <div class="icon">
                                <i class="fas fa-bed"></i>
                                <span>beds</span>
                            </div>
                        </div> */}
                        {/* <div class="info">
                            <span>1</span>
                            <div class="icon">
                                <i class="fas fa-bath"></i>
                                <span>bath</span>
                            </div>
                        </div> */}
                        {/* <div class="description">
                            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</div>
                            <div className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                tenetur nemo amet temporibus, enim soluta nam, debitis.</div>
                        </div> */}
                        
                        <div class="location">Epitech Marseille | 2021 - 2023 | Master's degree</div>
                        <div class="location" style={{paddingTop:110, position:'absolute'}}>Epitech Marseille | 2017 - 2021 | Bachelor's degree</div>
                        <div class="location" style={{paddingTop:195, position:'absolute'}}>Lycée StLouis | 2014 - 2017 | Scientific baccalaureate</div>


                        {/* <div class="price">January 2021 - Today</div> */}
                        <label for="card2" class="button2 return" aria-hidden="true">
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </label>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card3" class="more"/>
            <div class="content">
                <div class="front">
                    <div class="inner">
                        <div className='cardTitle'>Skills</div>
 
                        <label for="card3" class="button2" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                        {/* <div class="info">
                            <span>8</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>people</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>7</span>
                            <div class="icon">
                                <i class="fas fa-door-open"></i>
                                <span>rooms</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>5</span>
                            <div class="icon">
                                <i class="fas fa-bed"></i>
                                <span>beds</span>
                            </div>
                        </div>
                        <div class="info">
                            <span>2</span>
                            <div class="icon">
                                <i class="fas fa-bath"></i>
                                <span>baths</span>
                            </div>
                        </div> */}
                        <div class="description">
                            <div className='text'>•English(Working in a multinational team)<br/>•Project Management<br/>•Programming languages : PHP, Javascript, C++, C, Java...<br/>
                            •Frameworks : Symfony, Laravel, ReactJs, React Native, Angular<br/>•Git<br/>•HTML/Css<br/>•API REST / GraphQl<br/>•Object-oriented programming<br/>•ORM (Doctrine)<br/>•MySQL<br/>
                            •System administration<br/>•Tools : VsCode, Jira, Confluence, Powerpoint, Canva...</div>
                          </div>
                        {/* <div class="location">Cracow, Poland</div>
                        <div class="price">60€ / day</div> */}
                        <label for="card3" class="button2 return" aria-hidden="true">
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
    </div>                                

                </div>
                
   
                </div>


                
                
        )
    }
}


export default About;