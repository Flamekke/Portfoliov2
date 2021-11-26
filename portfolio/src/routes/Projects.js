import '../App.css';
import React from 'react';
import Navbar from '../Navbar';

function Projects() {

    const data = {
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


  return (
    
      <div>
          <Navbar />

          <div class="aa">Some <span>Projects</span></div>

          <div class="sm:grid grid-cols-4 gap-4">

              {data.crypto.map((item, index) => {
                  return <Projects title={item.title} articleLink={item.articleLink} imgUrl={item.imgUrl} tag={item.tag} />
              })}</div>
    </div>
  );

}

export default Projects;