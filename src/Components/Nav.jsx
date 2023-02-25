import logo from '../Components/Images/logo.png'
import bulb from '../Components/Images/bulb.png'

const Nav = ({d, navd}) => {



  return (
    <div className='nav' style={{backgroundColor: navd}}>
        
        <div className='reallogo'>
            <img src={logo} alt="" className='logo'/>
            <h1>REDNEWS</h1>
        </div>
      
      <button onClick={() => {d()}}><img src={bulb} alt="" className='bulb'/></button>

    </div>
  )
}

export default Nav
