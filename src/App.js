import React, { useState } from 'react'
import "./style/App.css"


import QRCode from 'react-qr-code'

const App = () => {


  const [value,setValue]=useState("")

  const [visible,setVisible]=useState(false)
  


  const GenerateCodeHandler=()=>{

    if(!value){
      return;
    }

    setVisible(true)
    
  }



  return (
    <div className='container'>
      <h1>QR Code Genarater 🔥 </h1>
       <input type='text' placeholder='Enter URL..'
        value={value}
       onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={GenerateCodeHandler}>Genarate </button>


       {visible && <div className='qr-code-container'>
        <QRCode value={value} size={300}/>
        
        </div>}
    </div>
  )
}

export default App
