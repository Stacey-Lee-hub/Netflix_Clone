import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={herotitle} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save his city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
          </div>
          <div className="title-card">
            <TitleCards/>
          </div>

        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
