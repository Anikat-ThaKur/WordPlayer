import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handlelowclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
    }
    const handlelonclear = () => {
        let newText ='';
        setText(newText)
        props.showAlert("Cleared Successfully","success");
    }
    const handleonchange= (event) => {
        setText(event.target.value)

    }
    const handleloncopy=() =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");


    }
    const handleonextraspaces=() =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelonclear}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleloncopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleonextraspaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.08*text.split(" ").length} minutes you can read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to Preview"}</p>
            </div>
        </>
    )
}
