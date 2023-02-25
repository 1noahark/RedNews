import banner from '../Components/Images/banner.png'

const News = ({data, mode}) => {
  return (
    <div className='container' style={{backgroundColor: mode}}>    
      
            {
              
                data.map(post => (
                    
                    <div key={post.id} className="post">
                        
                        <img src={banner} alt="" />
                        <p>{post.data.title}</p>
                    </div>
                ))
            }
      
    </div>
  )
}

export default News
