import Navbar from "../Navbar";
import React, { useState, useEffect } from 'react';
import Project from "../components/Project";
import "../components/About.css"
import Loader from "../components/Loader"
import AppitechLogo from "../asset/AppitechLogo.png"

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
        title: 'LE BRANDONCOIN DEVIENT LA PREMIERE MONNAIE DE TESLA',
        imgUrl: 'https://static.timesofisrael.com/www/uploads/2020/01/Untitled-28.jpg',
        tag : ["crypto", "brandoncoin"],
        description : "coucou2"
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