import React from "react";

function ResultBanner({
  resultStatus,
  numOfGuesses,
  correctAnswer,
  setFinished,
}) {
  if (resultStatus === true) {
    setFinished(true);
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }
  if (resultStatus === false) {
    setFinished(true);
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
      </div>
    );
  }
}

export default ResultBanner;
