import { useState } from 'react'
import '../Select/Select-style.css'
import { useEffect } from 'react'
import axios from 'axios'

const Select = () => {
  let [countries, setCountries] = useState([])
  let [selectedcountries, setSelectedCountries] = useState([])

  const fetchData= async () => {
    const res = await axios.get('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': `${import.meta.env.VITE_API_KEY}`
      }
    })
    console.log(res);
    setCountries(res.data);
  }
  useEffect(() => {
    fetchData()
  },[])
  
  const handleSelect = (event)=>{
    console.log(event.target.value);
    setSelectedCountries(event.target.value);
  }
  return (
    <>
      <div>
        <select className="form-select mt-5 text-center" aria-label="Default select example" onChange={(e)=>handleSelect(e)}>
          <option value="" disabled selected >Select Country</option>
          {countries.map((index, value )=>(
            <option key={index} value={countries[value]["name"]}>{countries[value]["name"]}</option>
          ))}
        </select>
      </div>
        <p className='mt-2 text-center'>{selectedcountries}</p>
    </>
  )
}

export default Select