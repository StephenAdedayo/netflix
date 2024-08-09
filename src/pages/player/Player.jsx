import React, { useEffect, useState } from 'react'
import './player.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams()

  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name : '',
    key : '',
    published_at : '',
    typeof : ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODBiNjVjOGNkMmIzZTIzMDliMjZlYTgyYTgyOTkxYyIsIm5iZiI6MTcyMzIxNjYwNS44MjY2NzgsInN1YiI6IjY2YjYzMTEzNzU4ZDQxOTQwYzA3MTcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QGWBir1so9cpDq3cjKUW8nq6UDQt_NOk66Awk9kPpN0'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, [])
  
  

  return (
    <div className='player'>
      {/* <Link to='/'> */}
      <img src="/back_arrow_icon.png" alt="" onClick={() => navigate(-1)} />

      {/* </Link> */}
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
