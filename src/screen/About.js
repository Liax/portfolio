import Nav from '../components/Nav.js'
import '../screen/home.css'

function About() {
  return (
    <div>
      <Nav />
      <div className='wrapProjet'>
        <div className='splitG'>
          <div className='titleProjets'>
            <h4>
              Intuitive, sensible et passionnée. Constamment en veille graphique
              et technique, ainsi qu'en quête de savoir. J’aime travailler vite,
              consciencieusement et accomplir de belles choses.
            </h4>
            <h4>
              Suite à un parcours orienté sur le design graphique j'ai désormais
              une spécialisation dans le développement web React et recherche un
              poste en Agence.
            </h4>
            <br />
            <h5>On fait connaissance ?</h5>
          </div>
        </div>
        <div className='splitD'>
          <div className='imgContainer'></div>
        </div>
      </div>
    </div>
  )
}

export default About
