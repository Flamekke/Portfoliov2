import React, {Component} from "react";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Projects from "./Projects";
import Navbar from "../Navbar";
class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          show:true
        };
      }

       data = {
        crypto: [
        {
            title: 'LE BITCOIN VOUS ALLEZ PAS CROIRE LE 10EME',
            articleLink: "https://www.cafedelabourse.com/archive/article/bitcoins-monnaie-virtuelle-investir-crypto-monnaie",
            imgUrl: 'https://www.journaldugeek.com/content/uploads/2021/04/bitcoin-image.jpg',
            tag : ["crypto", "bitcoin"]
        },
        {
            title: 'LE BRANDONCOIN DEVIENT LA PREMIERE MONNAIE DE TESLA',
            articleLink: "https://www.cafedelabourse.com/archive/article/bitcoins-monnaie-virtuelle-investir-crypto-monnaie",
            imgUrl: 'https://static.timesofisrael.com/www/uploads/2020/01/Untitled-28.jpg',
            tag : ["crypto", "brandoncoin"]
        },
    ] 
    }

      
      showTable() {
        this.setState({
          show: true
        });
      }
    render() {
    return (
        <div>
                                                  <Navbar/>



                    {/* <div class="title">
                    </div> */}
                    <div class="par">
                        <h1 style={{marginTop:"20px"}}>About <span>me</span></h1>
                        <h2>My name is Valentin LYON, I am a 4th year student at <br/> Epitech Marseille and a backend developer in the<br/>Travaux.com company located in Aix en Provence</h2>                        
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
                    <div className='jobTitle'>Back-End developer</div>
                    <div className='jobTitle' style={{paddingTop:124, position:'absolute', paddingLeft: 22}}>System administrator</div>
                    <div className='jobTitle' style={{paddingTop:200, position:'absolute', paddingLeft: 22}}>Web Developer</div>


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
                        <div class="location">Travaux.com | Jan 2021 - today</div>
                        <div class="location" style={{paddingTop:70, position:'absolute'}}>Travaux.com | Sep 2019 - Jan 2020</div>
                        <div class="location" style={{paddingTop:145, position:'absolute'}}>Auto Ecole Jenft | Dec 2018 - Jan 2019</div>


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
                    <div className='degree' style={{paddingLeft:-30}}>Software Architect (IOT/VR option)</div>
                    <div className='degree' style={{paddingTop:144, position:'absolute', paddingLeft: 20}}>Web and mobile project manager</div>
                    <div className='degree' style={{paddingTop:220, position:'absolute', paddingLeft: 20}}>Engineering science</div>


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
                        <div class="location" style={{paddingTop:95, position:'absolute'}}>Epitech Marseille | 2017 - 2021 | Bachelor's degree</div>
                        <div class="location" style={{paddingTop:170, position:'absolute'}}>Lycée StLouis | 2014 - 2017 | Scientific baccalaureate</div>


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
                      
                            
                        

    <h1>Some <span>Projects</span></h1>

                    </div>
                    <div class="sm:grid grid-cols-4 gap-4">

                    {this.data.crypto.map((item,index)=>{
      return <Projects title={item.title} articleLink={item.articleLink} imgUrl={item.imgUrl} tag={item.tag}/>
    })}</div>

                    
                </div>


                
                
        )
    }
}


export default About;