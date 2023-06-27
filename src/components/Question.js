import React, { useState, useEffect } from "react";
// import QuestionItem from "./QuestionItem";
import "./Question.css";
import Loading from "./Loading";
import he from "he";
import Scorecard from "./Scorecard";
// import Scorecard from "./Scorecard";
export default function Question(props) {
  const [result, setResult] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [rand, setRand] = useState(props.rand);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerSelected, setAnswerSelected] = useState(false);
  const [key, setKey] = useState(false);
  const [score, setScore] = useState(0);
  // const rand = Math.floor(Math.random()*4 +1);
  const handleNextItem = () => {
    setCurrentItem(currentItem + 1);
    setAnswerSelected(false);
    setSelectedAnswer("");
    setRand(Math.floor(Math.random() * 4 + 1));
    setKey(false);
  };

  const updateQuiz = async () => {
    let url = `https://opentdb.com/api.php?amount=${props.noOfQuestions}&category=${props.category}&difficulty=${props.difficulty}&type=multiple`;
    setLoading(true);
    // console.log(props.noOfQuestions);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    const decodedResults = parsedData.results.map((e) => ({
      question: he.decode(e.question),
      correct_answer: he.decode(e.correct_answer),
      incorrect_answers: e.incorrect_answers.map((item) => he.decode(item)),
    }));

    setResult(decodedResults);
    setLoading(false);
  };
  useEffect(() => {
    updateQuiz();
    // eslint-disable-next-line
  }, []);
  

  const handleAnswerSelection = (e) => {
    if (!answerSelected) {
      setSelectedAnswer(e.target.value);
      // console.log(e.target.value);
      setAnswerSelected(true);
      // console.log(selectedAnswer);
      if (
        // console.log(rand);
        (rand === 1 && e.target.value === "option3") ||
        (rand === 2 && e.target.value === "option2") ||
        (rand === 3 && e.target.value === "option1") ||
        (rand === 4 && e.target.value === "option4")
      ) {
        setScore(score + 1);
        setKey(true);
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
    if(key===true){
      setScore(score-1);
    }
  };

  return (
    <>
      {loading && <Loading />}
      {result.map((element, i) => {
        if (currentItem === i) {
          return (
            // {change === false &&
            <div key={i}>
              { (
                <div className="container my-3 " key={i}>
                  <>
                    <div className="container my-3">
                      <form>
                        <h1>Question No. {i + 1} </h1>

                        <div className="mb-3">
                          <label className="form-label">
                            {element.question}
                          </label>
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
                            <label
                              className="form-check-label"
                              htmlFor="question1Option1"
                            >
                              {(0 + rand) % 4 === 3
                                ? element.correct_answer
                                : element.incorrect_answers[(0 + rand) % 4]}
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
                            <label
                              className="form-check-label"
                              htmlFor="question1Option2"
                            >
                              {(1 + rand) % 4 === 3
                                ? element.correct_answer
                                : element.incorrect_answers[(1 + rand) % 4]}
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
                            <label
                              className="form-check-label"
                              htmlFor="question1Option3"
                            >
                              {(2 + rand) % 4 === 3
                                ? element.correct_answer
                                : element.incorrect_answers[(2 + rand) % 4]}
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
                            <label
                              className="form-check-label"
                              htmlFor="question1Option4"
                            >
                              {(3 + rand) % 4 === 3
                                ? element.correct_answer
                                : element.incorrect_answers[(3 + rand) % 4]}
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
                      
                    </div>
                    {/* {i + 1 === result.length && <Scorecard score={score} />} */}
                    {/* {i + 1 === result.length &&
                      setChange(i + 1 === result.length)} */}
                  </>

                  {/* imp */}
                  <div className="d-flex justify-content-between">
                  <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClearResponse}
                      >
                        Clear Response
                      </button>
                    <button
                      // di                        cursor  i + 1epointerbmit"
                      className="d-flex justify-content-end btn btn-primary"
                      onClick={handleNextItem}
                    >
                      {i + 1 === result.length ? "Score" : "Next"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
      {currentItem + 1 > result.length && !loading && <Scorecard score={score} />}
    </>
  );
}
