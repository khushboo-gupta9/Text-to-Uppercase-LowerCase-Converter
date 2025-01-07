import React, { useState } from 'react';
import './TextForm.css'; // Custom styles

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title text-center">{props.heading}</h1>
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
          ></textarea>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-secondary" onClick={handleLoClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-danger" onClick={() => setText('')}>
             Clear Text
           </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').filter((word) => word.length > 0).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').filter((word) => word.length > 0).length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </div>
  );
}
