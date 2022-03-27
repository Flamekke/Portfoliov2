import Navbar from "../Navbar";
import React, { useState, useEffect } from 'react';
import Project from "../components/Project";
import "../components/About.css"
import Loader from "../components/Loader"
import AppitechLogo from "../asset/AppitechLogo.png"
import Amazone from "../asset/Amazone.png"
import MyTeams from "../asset/MyTeams.png"
import Epicture from "../asset/Epicture.png"
import TrelloReborn from "../asset/TrelloReborn.png"
import EpiCosmos from "../asset/EpiCosmos.png"
export default function Projects() {

  const data = {
    crypto: [
    {
        title: 'Appitech',
        imgUrl: AppitechLogo,
        tag : ["React Native", "PHP", "Laravel"],
        description: "Mobile application based on the Epitech school intranet, provides access to its planning, projects, modules, profiles, notifications ..."
    },
    {
        title: 'Amazone',
        imgUrl: Amazone,
        tag : ["PHP", "Symfony", "Angular"],
        description : "E-commerce site giving the possibility to add articles, create a basket, have an invoice..."
    },
    {
      title: 'MyTeams',
      imgUrl: MyTeams,
      tag : ["NodeJs", "ReactJs", "Socker.io", "ElectronJs"],
      description : "Web and desktop messaging application, allowing to send private messages, create channels ..."
  },
  {
    title: 'TimeManager',
    imgUrl: MyTeams,
    tag : ["Elixir", "Phoenix", "VueJs", "Docker", "CI/CD"],
    description : "Web application for management of working time and salary according to the role, management and creation of teams, fully containerized application thanks to docker"
},
{
  title: 'Epicture',
  imgUrl: Epicture,
  tag : ["React Native", "Imgur API", "Gradle"],
  description : "Mobile application using the API of Imgur, allowing to save photos, to add some, to favor some ..."
},
{
  title: 'TrelloReborn',
  imgUrl: TrelloReborn,
  tag : ["Angular", "Spring", "Java"],
  description : "Web dashboard using APIs (weather, crypto, stock market ...) to display, modify and move widgets"
},
{
  title: 'EpiCosmos',
  imgUrl: EpiCosmos,
  tag : ["Angular", "NodeJs"],
  description : "Project developed as part of a hackaton, application allowing to locate and have the information of a satellite thanks to an API"
},
] 
}

      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
      });


    return (
      isLoading ? <Loader/> : <div>
      <Navbar status = {"articles"}/>
      <div class="aa" style={{marginTop:"-80px"}}>Some <span>Projects</span></div>
    <div class="sm:grid grid-cols-4 gap-4" style={{paddingTop:"40px"}}>
    {data.crypto.map((item,index)=>{
      return <Project title={item.title} imgUrl={item.imgUrl} tag={item.tag} description={item.description}/>
    })}

      </div></div>
    );
  }