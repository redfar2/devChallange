import { useState, useEffect } from "react";
import './App.css';



import ItemList from './components/itemList';


function App() {
  const [moviesList, setMoviesList] = useState([]);


  useEffect(() => {
    getData();

  }, []);



  async function getData() {
    const Data = await fetch('https://swapi.dev/api/films');
    const result = await Data.json();

    const movies = result.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        producer: movie.producer,
        director: movie.director,
        description: movie.opening_crawl
      };
    });
    setMoviesList(movies);
  }


  return (
    <div className="App">
      <ItemList movies={moviesList} />



    </div>
  );
}

export default App;
