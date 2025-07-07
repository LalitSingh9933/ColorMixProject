import { useState } from 'react'

import './App.css'

function App() {
  const colors= JSON.parse(localStorage.getItem("color")) || { red: 0, green: 0, blue: 255 };
  const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
  const [green, setGreen] = useState(colors && colors.green ? colors.green :0);
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);
  
 const save = () => {
  localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  alert("Color saved!");
 }
 
  return (
    <>
    <h1>Color Mixer</h1>
    <div style={{ width: '200px', height: '200px', backgroundColor:'rgb('+red+','+green+', '+blue+')',borderRadius:'10px' }}>

    </div>
    <label>Red</label>
    <input type='range' min={0} max= {255} value={red} onChange={(e)=>setRed(e.target.value)}/>
    <br/>
    <label>Green</label>
    <input type='range' min={0} max= {255}value={green} onChange={(e)=>setGreen(e.target.value)}/>
    <br/>
    <label>Blue</label>
    <input type='range' min={0} max = {255} value={blue} onChange={(e) => setBlue(e.target.value)}/>
    <br/>
    <br/>
    <button onClick={save}>Save</button>
  </>
  )
}

export default App
