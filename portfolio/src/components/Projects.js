import './Projects.css'
import React from "react";
import appitech from '../asset/Appitech.jpg';
import messagerie from '../asset/messagerie.jpg'
import amazon from '../asset/amazon.png'

class Projects extends React.Component {
    
    render() {
 
      return (
        <div>

<div class="container10" style={{marginTop:70}}>

<div class="card10">
		<figure class="card__thumb">
			<img src={appitech} style={{height:600}} class="card__image"/>
			<figcaption class="card__caption">
				<div class="card__title">Appitech</div>
				<div class="card__snippet">Intranet of my school, mobile application version, view your schedule, profile, projects, modules, notifications...<br/>React Native / PHP Laravel</div>
				{/* <a href="" class="card__button">Read more</a> */}
			</figcaption>
		</figure>
	</div>



  <div class="card10">
		<figure class="card__thumb">
			<img src={messagerie} style={{height:510}} class="card__image"/>
			<figcaption class="card__caption">
				<div class="card__title">MyTeams</div>
				<div class="card__snippet">Web messaging application, channel creation / deletion / modification, private messages, friend invitation... <br/>Angular / PHP Symfony</div>
				{/* <a href="" class="card__button">Read more</a> */}
			</figcaption>
		</figure>
	</div>


	<div class="card10">
		<figure class="card__thumb">
			<img src={amazon} style={{height:510}} class="card__image"/>
			<figcaption class="card__caption">
				<div class="card__title">Amazon</div>
				<div class="card__snippet">E Commerce web application, sale / purchase / modification of object, creation of baskets, orders, creation of invoices... <br/>Angular / PHP Symfony</div>
				{/* <a href="" class="card__button">Read more</a> */}
			</figcaption>
		</figure>
	</div>
</div>



        </div>
      );
    }
  }
  
export default Projects