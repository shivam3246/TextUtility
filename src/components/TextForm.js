import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Convert to Uppercase was clicked");
    props.showAlert("Converted to UpperCase!","success");
  };
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
    
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}></div>

      <div>
        <h1  style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
