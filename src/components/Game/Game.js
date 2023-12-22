import React, { useState } from "react";
import InputForm from "../InputForm";
import { useMemo } from "react";
import GuessGrid from "../GuessGrid/GuessGrid";
import ResultBanner from "../ResultBanner/ResultBanner";
import { sample } from "new-component/src/utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [finished, setFinished] = useState(false);

  const answer = useMemo(() => sample(WORDS), []);
  console.log(answer);

  const resultStatus =
    guessResults.some((word) => word === answer) || undefined;
  const numOfGuesses = guessResults.length;
  const bannerResult =
    numOfGuesses >= NUM_OF_GUESSES_ALLOWED ? false : resultStatus;
  console.log(resultStatus);
  let disabled = finished ? true : false;

  return (
    <>
      <GuessGrid guessResults={guessResults} answer={answer} />
      <ResultBanner
        resultStatus={bannerResult}
        numOfGuesses={numOfGuesses}
        correctAnswer={answer}
        setFinished={setFinished}
      />
      <InputForm setGuessResults={setGuessResults} disabled={disabled} />
    </>
  );
}

export default Game;
