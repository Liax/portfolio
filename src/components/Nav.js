import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='stickiTop'>
      <div className='Logo'>
        <Link to='/'>
          <h3>Clara Martin</h3>
        </Link>
      </div>
      <div className='aboutRight'>
        <Link to='/about'>
          <h5 className='stickit'> à propos </h5>
        </Link>
      </div>
    </div>
  )
}

export default Nav
