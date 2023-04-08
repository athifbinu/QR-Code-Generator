import React, { useState } from 'react'

import "../style/App.scss"


import QRCode from 'react-qr-code'



const Hero = () => {

    //to recice user data
    const [value,setValue]=useState("")
    //to create qr code
    const [visible,SetVisible]=useState(false)
     


    const GenerateCodeHandler=()=>{
        if(!value){
            
            return;
        }
        SetVisible(true)
        
    }





  return (
     <div>       
        <div className="container">
            <div className="main_cotainer">
                <div className="card">
                    <div className="card_data">
                       <h2>QR CodeGeneratour <span>🔥</span></h2>
                        <br />
                        <input type="text" placeholder='Enter URL...'
                        value={value} 
                        onChange={(e)=>setValue(e.target.value)}/>
                        
            
                        <button className='hero-btn' onClick={GenerateCodeHandler}>Generate</button>
                    </div>

                    {visible && <div className='qr-code'>
                         <QRCode value={value} size={200} width={150} height={150} />
                        </div>}
                </div>
            </div>
        </div>
     </div>
  )
}

export default Hero
