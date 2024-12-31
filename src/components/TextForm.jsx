import React, { useState } from 'react';
import './TextForm.css'; // External CSS for styling

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-form-container">
      <div className="text-card">
        <h1 className="text-heading">{props.heading}</h1>
        <textarea
          className="text-area"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary text-btn" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}
