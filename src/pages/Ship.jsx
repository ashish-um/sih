import { useEffect, useState } from 'react';
import RealTimeShipGraph from '../components/RealTimeShipGraph';

function Ship() {
    const [data, setData] = useState({
        speed: [50], // Starting speed
        courseHeading: [90], // Starting heading
        fuelConsumption: [30], // Starting fuel consumption
        engineRpm: [1500], // Starting RPM
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setData(prevData => {
            // Generate new values with gradual changes
            const newSpeed = Math.max(0, Math.min(100, prevData.speed[prevData.speed.length - 1] + (Math.random() * 10 - 5)));
            const newCourseHeading = Math.max(0, Math.min(360, prevData.courseHeading[prevData.courseHeading.length - 1] + (Math.random() * 5 - 2.5)));
            const newFuelConsumption = Math.max(0, Math.min(100, prevData.fuelConsumption[prevData.fuelConsumption.length - 1] + (Math.random() * 2 - 1)));
            const newEngineRpm = Math.max(500, Math.min(2000, prevData.engineRpm[prevData.engineRpm.length - 1] + (Math.random() * 50 - 25)));
    
            return {
              speed: [...prevData.speed.slice(-20), newSpeed],
              courseHeading: [...prevData.courseHeading.slice(-20), newCourseHeading],
              fuelConsumption: [...prevData.fuelConsumption.slice(-20), newFuelConsumption],
              engineRpm: [...prevData.engineRpm.slice(-20), newEngineRpm],
            };
          });
        }, 500); // Update every second
    
        return () => clearInterval(interval);
      }, []);


  return (
    <>
    <br /><br /><br />
    <div style={{display: "flex", gap:"10rem", margin:"auto"}}>
        <video autoPlay muted loop controls={false} width={580} src="/sih/vid.mp4"></video>
        <div>
            <div className='mgrid' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', width: '80%', margin: '0 auto' }}>
                <h3>Vessel Name:  <span style={{color:"#2a5fff"}}>Sea Explorer</span></h3>
                <h3 style={{color:"green"}}>100% Uptime</h3>
                <h3>Latitude: {(37.7749 - data.speed[data.speed.length-1]).toFixed(2)}</h3>
                <h3>Longitude: {(-122.4194 - data.speed[data.speed.length-1]).toFixed(2)}</h3>
                <h3>Navigational Status: Underway</h3>
                <h3>Destination	Port: Cochin Port</h3>
                <h3>ETA: 2024-11-15 8:00:00Z</h3>
                <h3>Cargo: Crude Oil</h3>
                <h3>Type: Tanker</h3>
            </div>
            <div>
                <RealTimeShipGraph data={data} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Ship