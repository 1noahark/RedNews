import icon from '../Components/Images/refresh.png'


const Nav = () => {

  function re(){
    
    window.location.reload()
    
  }

  return (
    <div className='footer'>
    <button onClick={() => {re()}}>
      <div className="rcont">
        <img src={icon} alt="" />
      </div>
    </button>
    <h4>Made by Noah</h4>
    </div>
  )
}

export default Nav