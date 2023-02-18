import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleDownClick = ()=> {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleOnChange = (event)=> {
        // console.log("On change"); 
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        msg.pitch = 2;
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const [text, setText] = useState('');
    // text = "new Text"; Wrong way to change the state
    // setText("new Text"); Correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleDownClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Text Copy</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={speak} id="toggle">Speak</button>
        </div>
    </div>
    <div className="container my-3">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
        
    </div>
</>
  )
}
