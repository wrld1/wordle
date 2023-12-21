import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const wordArr = word ? word.split("") : Array.from({ length: 5 });

  const answerArr = checkGuess(word, answer);

  return (
    <div>
      <p className="guess">
        {wordArr.map((letter, i) => {
          let className = word ? `${answerArr[i].status} cell` : "cell";
          return (
            <span className={className} key={i}>
              {letter}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default React.memo(Guess);
