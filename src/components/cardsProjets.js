import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'

const CardsProjets = (props) => {
  let [isHover, setIsHover] = useState(false)

  const titles = document.getElementsByClassName('projetTitle')
  //console.log(titles)
  // console.log(props)

  //let titles = null
  /*const viensici = () => {
    titles = document.querySelector('.projetTitle')
  }
*/
  const hoverTitle = () => {
    console.log('poulet2', props.image)
    props.setImage(props.image)
    setIsHover(!isHover)
  }

  const outTitle = () => {
    setIsHover(!isHover)
  }

  console.log('hidden', isHover)
  return (
    <div className='projet'>
      <Link to={`/${props.subtitle}`}>
        <h1
          onMouseOver={hoverTitle}
          onMouseOut={outTitle}
          className='projetTitle'
        >
          {props.name}
        </h1>
      </Link>
      <div className={isHover ? 'showing' : 'hidden'}>
        <h6>{props.subtitle}</h6>
        <p>
          {props.year} • {props.type}
        </p>
      </div>
    </div>
  )
}

export default CardsProjets
