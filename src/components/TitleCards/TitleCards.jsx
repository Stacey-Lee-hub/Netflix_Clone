import React, {useEffect, useRef} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'



const TitleCards = ({title, category}) => {

  const cardsRef = useRef();

  const handleWheel = (event)=> {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
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
        {cards_data.map((card, i)=> {
          return <div className="card" key={i}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
