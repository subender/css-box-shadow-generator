import React, { useState } from 'react'
import { Slider } from '@mui/material'
import "./PanelCss.css"



const Panel = () => {

  const [xAxis, setXAxis] = useState(10);
  const [yAxis, setYAxis] = useState(10);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#030202");

  console.log(color)  
  return (
    <>
     <div className='container'>
       <div className='controls'>
         <h2>Controls</h2>
         <div className='control__box'>
           <label>X-offset</label>
           <Slider
            value={xAxis}
            defaultValue={10}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={-200}
            
  max={200}
  onChange={(e)=> setXAxis(e.target.value) }
/>
         </div>

         <div className='control__box'>
           <label>Y-offset</label>
           <Slider
  
            defaultValue={10}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={-200}
            max={200}
            value={yAxis}
            onChange={(e)=> setYAxis(e.target.value)}
/>

         </div>

         <div className='control__box'>
           <label>Blur Radious</label>
           <Slider
  
            defaultValue={5}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={0}
            max={200}
            
            onChange={(e)=>setBlur(e.target.value)}
/>

         </div>

         <div className='control__box'>
           <label>Spread Radious</label>
           <Slider
  
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={0}
            max={200}
            value={spread}
            onChange={(e)=>setSpread(e.target.value)}
            
            
/>

         </div>

         <div className='control__box'>
           <label >Color</label>
           <input type="color" name="color" id="color" value={color} onChange={(e)=> setColor(e.target.value)} />
         </div>
         
       </div>

       <div className='output'>
         <div className='target' style={{boxShadow: `${xAxis}px ${yAxis}px ${blur}px ${spread}px ${color}`}}></div>
         <textarea  cols="30" rows="5" minlength="10" maxlength="500"
         value={`box-shadow: ${xAxis}px ${yAxis}px ${blur}px ${spread}px ${color};`}></textarea>
         
       </div>

       
     </div>
     <p>Made with <span>❤️</span> by <a href="https://twitter.com/subendernath">@Subender</a> </p>
    </>
  )
}

export default Panel