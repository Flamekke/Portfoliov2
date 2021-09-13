import './Projects.css'
import React from "react";
import appitech from '../asset/Appitech.jpg';


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
			<img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image"/>
			<figcaption class="card__caption">
				<div class="card__title">Why You Should Bring Your Dog To Work</div>
				<div class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</div>
				{/* <a href="" class="card__button">Read more</a> */}
			</figcaption>
		</figure>
	</div>


	<div class="card10">
		<figure class="card__thumb">
			<img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image"/>
			<figcaption class="card__caption">
				<div class="card__title">Why You Should Bring Your Dog To Work</div>
				<div class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</div>
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