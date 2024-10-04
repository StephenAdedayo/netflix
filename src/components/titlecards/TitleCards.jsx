import React, { useEffect, useRef, useState } from 'react'
import './titlecards.css'
import cards from '../../assets/cards/Cards_data'
import { Link, useParams } from 'react-router-dom'


 


const TitleCards = ({title, category}) => {
   const {id} = useParams()
    const cardsRef = useRef()
    const [apiData, setApiData] = useState([])

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODBiNjVjOGNkMmIzZTIzMDliMjZlYTgyYTgyOTkxYyIsIm5iZiI6MTcyMzIxNjYwNS44MjY2NzgsInN1YiI6IjY2YjYzMTEzNzU4ZDQxOTQwYzA3MTcxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QGWBir1so9cpDq3cjKUW8nq6UDQt_NOk66Awk9kPpN0'
      }
    };
    



    const handleWheel = (e) => {
       e.preventDefault()
       cardsRef.current.scrollLeft +=e.deltaY
    } 
   
    useEffect(() => {
       cardsRef.current.addEventListener('wheel', handleWheel)

       fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
       .then(response => response.json())
       .then(response => setApiData(response.results))
       .catch(err => console.error(err));
    }, [])


  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular On Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`}>
           <div key={index} className='card'>
                <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
                <p>{card.original_title}</p>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  )
}

export default TitleCards
