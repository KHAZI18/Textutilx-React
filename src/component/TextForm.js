import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const changetoupper = () => {
        console.log("button clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted To Upper Case...");
    }

    const changetolower = () => {
        console.log("button clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted To Lower Case...");
    }

    const Clearscreen = () => {
        console.log("button clicked");
        setText('');
        props.showAlert("Cleared Screen...");
    }

    const clicktocopy = () =>{
      console.log("button clicked");
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      props.showAlert("Copied to Clipboard...");
  }
  

    const changetext = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className="mb-3" style={{ color: props.mode==='dark' ? '#fff' : 'black' }}>
                <h1>{props.title}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} style={{ backgroundColor: props.mode==='dark' ? '#818FB4' : 'white', color: props.mode==='dark' ? '#fff' : 'black' }} placeholder='Write Here' onChange={changetext}/>
                <br />
                <div className="d-flex flex-column flex-md-row justify-content-md">
                    <button className="btn my-1 mx-md-2" style={{ backgroundColor: '#363062', borderColor: '#363062', color: 'white' }} onClick={changetoupper}>ChangeTOuppercase</button>
                    <button className="btn my-1 mx-md-2" style={{ backgroundColor: '#363062', borderColor: '#363062', color: 'white' }} onClick={changetolower}>ChangeTOlowercase</button>
                    <button className="btn my-1 mx-md-2" style={{ backgroundColor: '#363062', borderColor: '#363062', color: 'white' }} onClick={Clearscreen}>ClearScreen</button>
                    <button className="btn my-1 mx-md-2" style={{ backgroundColor: '#363062', borderColor: '#363062', color: 'white' }} onClick={clicktocopy}>ClickTocopy</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode==='dark' ? '#fff' : 'black' }}>
                <h2>Your Text Summary</h2>
              <p>{text.trim() === "" ? "0" : text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.length} character</p>
              <p>It takes {text.trim() === "" ? "0" : 0.008 * text.trim().split(/\s+/).filter(word => word !== "").length} minute to read</p>
          </div>

        </>
    );
}

