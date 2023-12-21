import React, { useState } from "react";
import InputForm from "../InputForm";
import { useMemo } from "react";
import GuessGrid from "../GuessGrid/GuessGrid";
import ResultBanner from "../ResultBanner/ResultBanner";
import { sample } from "new-component/src/utils";
import { WORDS } from "../../data";

// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [result, setResult] = useState();

  const answer = useMemo(() => sample(WORDS), []);
  console.log(answer);

  const res = guessResults.some((word) => word === answer);
  console.log(res);

  return (
    <>
      <GuessGrid guessResults={guessResults} answer={answer} />
      <ResultBanner result={result} />
      <InputForm setGuessResults={setGuessResults} />
    </>
  );
}

export default Game;
