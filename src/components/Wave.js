import '../screen/home.css'

const Wave = () => {
  var derniere_position_de_scroll_connue = 0
  var ticking = false

  function faireQuelqueChose(position_scroll) {
    // faire quelque chose avec la position du scroll
  }

  window.addEventListener('scroll', function (e) {
    derniere_position_de_scroll_connue = window.scrollY
  })

  console.log(window.scrollY)
  return (
    <div className='wrapperProjet'>
      <div className='langue'></div>
      <svg
        id='waveSvg'
        data-name='Layer 2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 4264.42 1478.69'
      >
        <path
          className='cls-1'
          fill='EFCDCD'
          d='M2861.71-2147.35v1454.4c-429.25-397.2-1222.52-663.76-2130.13-663.76-909.63,0-1704.4,267.75-2133,666.4h-1.3V-1750.53c41.74-89.22,189.06-323.39,590.74-341.07,380.39-16.74,555.07,200.49,555.07,200.49s22.45,25.82,84.16,51.39,162.4,50.83,319.07,49.93c153.48-.88,281.36-67.45,355.22-116.82C545.25-1935.81,570-1959,570-1959s161.48-123.33,428.15-126.13c159.29-1.67,285.3,42.37,375.53,92,72.69,40,122.16,83.57,147.12,109.79,55.94,58.77,225.78,144.16,398,116s263.32-89.18,370.91-231.59c30.15-39.92,66.81-71.33,107.13-95.7C2551.63-2188.18,2760.27-2178,2861.71-2147.35Z'
          transform='translate(1402.71 2169)'
        />
      </svg>
      <div className='projets'>
        <div className='container'>
          <div className='Logo'>
            <h3>Clara Martin</h3>
          </div>
          <div className='aboutRight'>
            <h5 className='stickit'>à propos </h5>
          </div>
          <div className='wrapProjet'>
            <div className='splitG'></div>
            <div className='splitD'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wave
