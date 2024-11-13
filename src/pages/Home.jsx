import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <br />
      <img className='bg' src="/sih/bg2.jpg" alt="" />
      <div style={{display:'flex', flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100svw", margin:"0", padding:"0"}}>

        <h1 style={{color:"white", margin:"auto", textAlign:"center"}}>Oil-SENTRY: Real-Time Oil Spill Detection and Prevention</h1>
        <h3 style={{color:"white", opacity:"0.6", textAlign:"center"}}>Empowering authorities to protect the environment through advanced AI and satellite technology</h3>
        <input type="text" name="" id="" placeholder='IMO number' /> 
        <div style={{display: "flex", gap:"1rem", justifyContent:"center"}}>  
          <a target='_blank' href="https://www.noaa.gov/education/resource-collections/ocean-coasts/oil-spills">
            <button>Learn More</button>
          </a>
          <Link to={"/ship"}>
          <button>Demo</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home