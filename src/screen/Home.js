import './home.css'
import Wave from '../components/Wave.js'

function Home() {
  return (
    <>
      <div className='wrapperHome'>
        <div className='wrappertext'>
          <h4>
            Hi there, je suis
            <br />
            <span className='bigtitle delay'>Clara Martin</span>
            <br />
            une
            <br />
            <span className='bigtitle delay1'>Développeuse</span>
            <br />
            <span className='bigtitle delay2'>et designeuse web</span>
          </h4>
          <div className='wrapDot'>
            <div className='dot-flashing'></div>
          </div>
        </div>
      </div>
      <Wave />
    </>
  )
}

export default Home
