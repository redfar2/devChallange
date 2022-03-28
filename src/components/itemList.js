import  { useState } from 'react';
import '../App.css';

import Item from './item';


const ItemList = (props) => {



  const list = props.movies.map((movie) => {


    return (<Item key={movie.id}
      title={movie.title} producer={movie.producer} director={movie.director} description={movie.description} />)
  });


  return (

    <div className="App-content">
      <div className="md:container md:mx-auto w-2/5 px-4">
        <h3 className="Header-Title mx-auto  items-center justify-center text-2xl font-bold">Prendre RDV avec un(e) spécialiste à proximité de France</h3>
        <p className="Header-Subtitle">Trouver un spécialiste au sein des clinique ELSAN</p>
        <br></br>
        <div className="Section-Title flex flex-col mx-auto w-2/5 " >
          <h3 >Spécialiste</h3>
        </div>
        <div className=" flex flex-col mx-auto w-2/5 items-center justify-center bg-white dark:bg-gray-800 rounded-b-lg shadow">
          <ul className="flex flex-col divide divide-y w-full ">
            {list}

          </ul>
        </div>
      </div>

    </div>

  );
}

export default ItemList;
