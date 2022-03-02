import dataProjets from '../assets/projets.json'
import Nav from '../components/Nav.js'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../screen/textDefile.css'

const ProjetDetails = (props) => {
  const params = useParams()
  const subtitle = params.linked

  // let next = dataProjets.id
  // console.log(dataProjets.id)

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
            return dataProjet.linked === subtitle
          })
          .map((data) => (
            <div className='wrapProjet'>
              <div className='splitG'>
                <div className='containerText'>
                  <div className='titleProjet'>
                    <div className='messagedefilant'>
                      <div className='messageContent' data-text={data.name}>
                        <span className='messageH2'>{data.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className='containerDetails'>
                    <div className='wrapYear'>
                      <h5>
                        {data.year} • {data.type}
                      </h5>
                    </div>
                    <p>{data.description[0]}</p>
                    <p>{data.description[1]}</p>
                    <p>{data.description[2]}</p>
                    <p>{data.description[3]}</p>

                    <h5>
                      <Link to='/'>
                        <span>Retour</span>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className='splitD'>
                <div className='imgContainerDet'>
                  <div className='imgContainerDetails'>
                    {data.images.map((img) => (
                      <img
                        className='rounded'
                        src={require(`../${img}`)}
                        alt={data.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProjetDetails
