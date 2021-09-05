import './Navbar.css'
import './ButtonBr.css'
import React, {useEffect, useState, useRef} from "react";


const ButtonBr=({clickMe}) => {
const [printOn, setPrintOne] = useState(true);    
var e = document.getElementById('btn');
console.log(e);

function test()
{
    clickMe();
    if (printOn) {
        setPrintOne(false);
    } else {
        setPrintOne(true)
    }
}
// e.onclick('click', function() {
//   if (this.className == 'on') this.classList.remove('on');
//   else this.classList.add('on');
// })
    return (
        <div>
        <button id="btn" className={printOn? "on" : null}  onClick={test}><span></span><span></span><span></span></button>
        </div>
    )
    
}


export default ButtonBr;