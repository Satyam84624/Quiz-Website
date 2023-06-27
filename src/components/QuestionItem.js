import React, { useState } from "react";
// import "./Question.css";
import Scorecard from "./Scorecard";
export default function QuestionItem(props) {
  // const rand = Math.floor(Math.random() * 4 + 1);
  // console.log(rand);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerSelected, setAnswerSelected] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (e) => {
    if (!answerSelected) {
      setSelectedAnswer(e.target.value);
      // console.log(e.target.value);
      setAnswerSelected(true);
      // console.log(selectedAnswer);
      if (
        // console.log(props.rand);
        (props.rand === 1 && e.target.value === "option3") ||
        (props.rand === 2 && e.target.value === "option2") ||
        (props.rand === 3 && e.target.value === "option1") ||
        (props.rand === 4 && e.target.value === "option4")
      ) {
        setScore(score + 1);
        // console.log(score+1);
      }
    }
  };
  // useEffect(() => {
  //   console.log(score);
  // }, [score]);
  const handleClearResponse = () => {
    setSelectedAnswer("");
    setAnswerSelected(false);
  };
  return (
    <>
      {props.index+1 !== props.length && (<div className="container my-3">
        <form>
          <h1>Question No. {props.index + 1} </h1>

          <div className="mb-3">
            <label className="form-label">{props.question}</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="question1"
                id="question1Option1"
                value="option1"
                checked={selectedAnswer === "option1"}
                onChange={handleAnswerSelection}
                disabled={answerSelected}
              />
              <label className="form-check-label" htmlFor="question1Option1">
                {(0 + props.rand) % 4 === 3
                  ? props.correct_answer
                  : props.incorrect_answers[(0 + props.rand) % 4]}
                {/* {props.correct_answer} */}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="question1"
                id="question1Option2"
                value="option2"
                checked={selectedAnswer === "option2"}
                onChange={handleAnswerSelection}
                disabled={answerSelected}
              />
              <label className="form-check-label" htmlFor="question1Option2">
                {(1 + props.rand) % 4 === 3
                  ? props.correct_answer
                  : props.incorrect_answers[(1 + props.rand) % 4]}
                {/* {props.incorrect_answers[0]} */}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="question1"
                id="question1Option3"
                value="option3"
                checked={selectedAnswer === "option3"}
                onChange={handleAnswerSelection}
                disabled={answerSelected}
              />
              <label className="form-check-label" htmlFor="question1Option3">
                {(2 + props.rand) % 4 === 3
                  ? props.correct_answer
                  : props.incorrect_answers[(2 + props.rand) % 4]}
                {/* {props.incorrect_answers[1]} */}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="question1"
                id="question1Option4"
                value="option4"
                checked={selectedAnswer === "option4"}
                onChange={handleAnswerSelection}
                disabled={answerSelected}
              />
              <label className="form-check-label" htmlFor="question1Option4">
                {(3 + props.rand) % 4 === 3
                  ? props.correct_answer
                  : props.incorrect_answers[(3 + props.rand) % 4]}
                {/* {props.incorrect_answers[2]} */}
              </label>
            </div>
          </div>

          {/* <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="d-flex justify-content-end btn btn-primary"
        >
          Submit
        </button>
      </div> */}
        </form>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClearResponse}
        >
          Clear Response
        </button>
      </div>)}
      {props.index+1 === props.length && <Scorecard score={score}/>}
    </>
  );
}
