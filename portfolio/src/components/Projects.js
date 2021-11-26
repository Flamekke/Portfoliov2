import React from "react";

export default function Projects(props) {

  function open(){
    window.open("https://www.cafedelabourse.com/archive/article/bitcoins-monnaie-virtuelle-investir-crypto-monnaie", '_blank');
  }

  return (
    
    <div class="p-10 " >  
    <div class="max-w-sm rounded overflow-hidden shadow-lg " style={{backgroundColor: 'white'}}>
      <img class="w-full" src={props.imgUrl} alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
      </div>
      <button onClick={open}
                  className="group relative w-full  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  See more
      </button>
      <div class="px-6 pt-4 pb-2">
        {props.tag.map((item,index)=>{
          return <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
        })}
      </div>
    </div>
  </div>
  );
}