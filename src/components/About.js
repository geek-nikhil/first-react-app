import React, {useState} from 'react'

export default function About() {
  const [mystyle,setMystyle] = useState({
    color:'white',
    backgroundColor:'black'
})
const [btntext,setBtntext] = useState("Enable Dark Mode")
const call=()=>{
  if(mystyle.color ==='white'){
      setMystyle({
          color:'black',
          backgroundColor:'white',
          border:'4px white solid'
      })
      setBtntext("Enable Light Mode");
  }else{
      setMystyle({
          color:'white',
          backgroundColor:'black',
          border:'4px black solid'
      })
      setBtntext("Enable Dark Mode");
  }
}
  return (
    <div classNameName="container" style={mystyle}>
        <h1 classNameName='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"  style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" classNameName="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body" style={mystyle} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body"  >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div classNameName='container my-3'>
<button onClick={call}>{btntext}</button>
</div>
    </div>
  )
}
