import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessGrid({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num, i) => (
        <Guess key={num} word={guessResults[i]} answer={answer} />
      ))}
    </div>
  );
}

export default React.memo(GuessGrid);
