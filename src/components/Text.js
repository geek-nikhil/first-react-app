import React,{useState} from 'react'
import propTypes from 'prop-types';

export default function Text(props) {
  console.log(props.mode)
  const handleUpClick = () => {
    // console.log("Upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","sucess")
  }
  const handlelowClick = () => {
    // console.log("Upper case was clicked")
    let newText = text.toLowerCase();
    setText(newText)
  
    props.showAlert("converted to lowercase","sucess")
  }
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }
  const copyboard = () =>{
    var text = document.getElementById("disabledTextInput")
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","succes");
  }
 const [text,setText] = useState('Enter Text here');
  return (
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2 style={{color:props.mode==='dark'?'white':'black'}}>Enter the text to analyze </h2>
      <textarea type="text" id="disabledTextInput" onChange={handleOnChange} className="form-control" rows = "8" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}/>
     <div>
      <button className = "btn btn-primary mx-2"  onClick={handleUpClick}>To Uppercase</button> 
      <button className = "btn btn-primary mx-2"  onClick={handlelowClick}>To Lowercase</button> 
      <button className = "btn btn-primary mx-2"  onClick={copyboard}>Copy Text </button> 
      </div>
      <div className="container my-3" >
       <h1>Your Text Summary</h1>
       <p>{text.split(" ").length} and {text.length} characters </p>
       <p>{0.008* text.split(" ").length} Minutes read</p>
    </div>
    </div> 

  );
}

Text.propsTypes = {
  mode:propTypes.string
}

