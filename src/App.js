import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Footer from './Components/Footer'
import News from './Components/News'

function App() {

  const [news, setnews] = useState([])
  const [darkmode, setdarkmode] = useState([])
  const [navc, setnavc] = useState([])

  

  function dark(){

    
      setdarkmode('#1E1E1E')
      setnavc('black')

      if(darkmode === '#1E1E1E'){
        setdarkmode('white')
      }

      if(navc === "black"){
        setnavc("white")
      }
    
    
    
    
  }
  

  useEffect(()=>{
    
    fetchdata()
    
  }, [])

  async function fetchdata(){

    

    

    const data = await fetch('https://www.reddit.com/r/news.json')
    const res = await data.json()
    const filter = res["data"]["children"]
    setnews(filter)
    

  }


  

   

  return (
    <div className="App">
      <Nav d={dark} navd={navc}/>
      <News data={news} mode={darkmode}/>
      <Footer  />
    </div>
  );
}

export default App;
