import React from "react";
import './Header.css'
import Image from 'react-bootstrap/Image';
function App(){
    return(
       <>
      
    <div className="head">
    <h2>WELCOME TO MINDEASE</h2>
    <p>An online Treatment OCD Platform</p>
    </div>
    <div className="main">
        <div className="first">
        <Image className="image" src="ocd2.png" fluid />
        </div>
        <div className="sec">
     <h5>Overcoming OCD with expert care made simple</h5>
     <p>Navigating OCD can be complex, but finding the right care shouldn’t be. Our platform connects you with empathetic specialists who provide personalized treatment plans. With professional support, many find that the symptoms of OCD become manageable, allowing for a return to the activities and life they enjoy.</p>
       <p>Begin your journey by connecting with a licensed therapist who specializes in OCD treatment. Your therapy sessions will be tailored to your schedule, secure, and respectful of your privacy.</p>
        </div>
    </div>
       
        
        </>
    )
}
export default App;