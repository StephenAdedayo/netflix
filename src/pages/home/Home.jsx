import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import TitleCards from '../../components/titlecards/TitleCards'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
      <div className="hero">
        <img src="/hero_banner.jpg" alt="" className='banner-img' />
        <div className="hero-caption">
            <img src="/hero_title.png" alt="" className='caption-img'/>
            <p>Discovering his tries to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy</p>
            <div className="hero-btn">
                <button className='btn'><img src="/play_icon.png" alt="" />Play</button>
                <button className='btn dark-btn'><img src="/info_icon.png" alt="" />More Info</button>

            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title='Blockbuster Movies' category={'top_rated'}/>
        <TitleCards title={'Only on Netflix'} category={'popular'}/>
        <TitleCards title={'Upcoming'} category={'upcoming'}/>
        <TitleCards title={'Top pics for You'} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
