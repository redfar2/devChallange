import '../App.css';

import Item from './item';


const ItemList = (props) => {



  const list = props.movies.map((movie) => {


    return (<Item key={movie.id}
      title={movie.title} producer={movie.producer} director={movie.director} description={movie.description} />)
  });


  return (

    <div className="App-content w-full min-w-min">
      <div className="w-screen px-4">
        <div className="m-auto lg:w-6/12 lg:px-4 lg:py-10 md:w-10/12 md:px-2 md:py-5 sm:w-full px-1 py-5">
          <h3 className="Header-Title mx-auto  items-center justify-center text-2xl font-bold">Prendre RDV avec un(e) spécialiste à proximité de France</h3>
          <p className="Header-Subtitle">Trouver un spécialiste au sein des clinique ELSAN</p>
          <br></br>
          <div className="Section-Title flex mx-auto  " >
            <h3 >Spécialiste</h3>
          </div>
          <div className=" items-center justify-center bg-white dark:bg-gray-800 rounded-b-lg shadow">
            <ul className="divide divide-y w-full ">
              {list}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ItemList;