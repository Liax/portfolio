import dataProjets from '../assets/projets.json'
import Nav from '../components/Nav.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../screen/textDefile.css'

const ProjetDetails = (props) => {
  const params = useParams()
  const subtitle = params.subtitle

  // useEffect(() => {
  //   fetch(dataProjets)
  //     .then((res) => res.json())
  //     .then((res) => console.log('poulet', res))
  // }, [])

  return (
    <div className=''>
      <div className='containerProjet'>
        <div className='bgBlue'></div>
        <Nav />
        {dataProjets
          .filter((dataProjet) => {
            return dataProjet.subtitle === subtitle
          })
          .map((data) => (
            <div className='wrapProjet'>
              <div className='splitG'>
                <div className='titleProjet'>
                  <div className='messagedefilant'>
                    <div className='messageContent' data-text={data.name}>
                      <span className='messageH2'> {data.name}</span>
                    </div>
                  </div>
                </div>
                <div className='containerDetails'>
                  <div className='wrapYear'>
                    <h5>
                      {data.year} • {data.type}
                    </h5>
                  </div>
                  {data.description}
                </div>
              </div>
              <div className='splitD'>
                <div className='imgContainer'>
                  <img src={data.image} alt={data.name} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProjetDetails
