import { Link } from 'react-router-dom'
import { useState } from 'react'

const CardsProjets = (props) => {
  let [isHover, setIsHover] = useState(false)

  const hoverTitle = () => {
    // permet l'affichage des images corrspondant a chaque projet au hover
    props.setImage(props.image)
    setIsHover(!isHover)
  }

  const outTitle = () => {
    setIsHover(!isHover)
  }
  const scrollTopProject = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='projet'>
      {/*Allows to have a dynamic url*/}
      <Link to={`/${props.linked}`}>
        <h1
          onMouseOver={hoverTitle}
          onMouseOut={outTitle}
          className='projetTitle'
          onClick={() => {
            scrollTopProject()
          }}
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
