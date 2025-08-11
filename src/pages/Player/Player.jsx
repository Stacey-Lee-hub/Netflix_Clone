import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTkyNmE0YTRhMmFmY2E2ODQ0ZDkyNTcwYWY5OWQwNiIsIm5iZiI6MTc1NDg5NjIxOC4yNTUsInN1YiI6IjY4OTk5NzVhYjRhMTMyYmEwZDhkYWM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.okH0lyPtrNTA4PkotWIt8WCh7sd3-1qz6pOqW9WYH0g'
    }
  };

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0])) //get first response from the fetched array
      .catch(err => console.error(err));
  }, [])



  return (
    <div className='player'>
      <img onClick={()=> {navigate(-2)}} src={back_arrow} alt="" />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title={apiData.name} frameborder="0" allowfullscreen></iframe>
      <div className="playerinfo">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
