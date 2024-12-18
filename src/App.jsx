
import './App.css'
import { useState } from 'react'


function App() {

  const [data, setData] = useState(null)
  const [placeInput, setPlaceInput] = useState('');


      const fetchData = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeInput}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`;
        
        fetch(url).then((res)=>{
            res.json().then(result=>{
                setData(result)
            })
        })

        
      }
   

  const handleSearch = () => {
    if (placeInput.trim() !== '') {
      fetchData();
    } else {
      alert('Please enter a valid place name');
    }
  };


  return (
    <>
      <div style={{maxHeight:'100vh'}}>
        <div className='navibar'>
          <h3>Weather Forecast</h3>
          {/* <div style={{fontSize:'30px'}}>{getDate()}</div>
          <div style={{fontSize:'30px'}}>19 <span>Dec</span></div> */}
        </div>

        {/* input bar */}
        <div className='d-flex justify-content-center'>
          <div className="input-group mt-5 w-75">
            <input name='placeInput' value={placeInput} onChange={(e)=>setPlaceInput(e.target.value)} type="text" className="form-control mx-2 border rounded" placeholder="Enter Place" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <span onClick={handleSearch} style={{fontSize:'30px'}} className="input-group-text" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
        </div>



        <div >
          {
            data && (
              <div key={data.id} className='mainBody mt-5'>
                <h1 className='mt-3'>{data.name}</h1>
                <h1  style={{fontSize:'70px'}}>{data.main.temp} °C</h1>
                <div className='d-flex justify-contents-center mt-5'>
                  <div className='mx-5'>
                    <h4>Humidity</h4>
                    <h3>{data.main.humidity} %</h3>
                  </div>
                  <div className='mx-5'>
                    <h4>Wind</h4>
                    <h3>{data.wind.speed} m/s</h3>
                  </div>
                  <div className='mx-5'>
                    <h4>Pressure</h4>
                    <h3>{data.main.pressure} hpa</h3>
                  </div>
                </div>
              </div>
            )
          }
        </div>

      </div>
    </>
  )


}

export default App



  
