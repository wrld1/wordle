import React, { useState } from "react";

function InputForm({ setGuessResults, disabled }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuessResults((prevGuessResults) => [...prevGuessResults, value]);
    setValue("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default InputForm;
