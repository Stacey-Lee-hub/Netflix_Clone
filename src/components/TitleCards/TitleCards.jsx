import React, {useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom';



const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]); //empty array in useState cause the api res is getting arrays

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTkyNmE0YTRhMmFmY2E2ODQ0ZDkyNTcwYWY5OWQwNiIsIm5iZiI6MTc1NDg5NjIxOC4yNTUsInN1YiI6IjY4OTk5NzVhYjRhMTMyYmEwZDhkYWM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.okH0lyPtrNTA4PkotWIt8WCh7sd3-1qz6pOqW9WYH0g'
    }
  };

  const handleWheel = (event)=> {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results)) //results cause on the api data you can see the array fetched is under "results"
      .catch(err => console.error(err));

    const current = cardsRef.current;
    current.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, i)=> {
          return <Link to={`/player/${card.id}`} className="card" key={i}>
                    <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt=""/> 
                    <p>{card.title}</p>
                </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
