import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleonSentenceclick = () =>{
        let newText=text[0].toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert("Sentence mode on lessgo!","success");
    
    }
    /* for downloading i created a new Blob object of value and type text and attached it to href of temp anchor a and then downloaded it*/
    const handleonDownload= ()=>{
        
        const element = document.createElement("a");
        const file=new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "mytext.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Dear user your file is successfully downloaded as mytext","success");
        

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
       
        navigator.clipboard.writeText(text);
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
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelonclear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloncopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonextraspaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonDownload}>Download Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleonSentenceclick}>Sentence Click</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes you can read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
