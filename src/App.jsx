import './App.css'

function App() {

  return (
    <>
    <nav>
      <div>
        <img src="/logo2.png" width={100} alt="" />
        <div style={{display:"flex", gap:"1rem", marginRight:"1rem", alignItems:"center"}}>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Our Goal</p>
          <p>Contact Us</p>
        </div>
      </div>
    </nav>
    <br />
      <img className='bg' src="/bg2.jpg" alt="" />
      <h1 style={{color:"white"}}>Oil-SENTRY: Real-Time Oil Spill Detection and Prevention</h1>
      <h3 style={{color:"white", opacity:"0.6"}}>Empowering authorities to protect the environment through advanced AI and satellite technology</h3>
      <input type="text" name="" id="" placeholder='IMO number' /> 
      <div style={{display: "flex", gap:"1rem", justifyContent:"center"}}>  
        <a target='_blank' href="https://www.noaa.gov/education/resource-collections/ocean-coasts/oil-spills">
          <button>Learn More</button>
        </a>
        <button>Demo</button>
      </div>
    </>
  )
}

export default App
