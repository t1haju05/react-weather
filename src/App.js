import './App.css';
import Weather from './weather';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setisLoading] = useState(true)
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setisLoading(false)
      }, (error) => {
        alert(error)
      })
    }
    else {
      alert('GPS not supported')
    }
  }, [])

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }
  else {
    return (
      <div className="content">
        <h3>Your position</h3>
        <p>
          Position:&nbsp;
          {lat.toFixed(3)},
          {lng.toFixed(3)},
        </p>
        <Weather lat={lat} lng={lng} />
      </div>
    )
  }

}


export default App;