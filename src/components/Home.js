import React, { useState } from "react";
import Question from "./Question";
import Navbar from './Navbar';

export default function Home() {
  const [value, setValue] = useState(10);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

const onQuestionInputChange = (e) => {
  if (e.target.value > 50){
    setValue(50);
  }
  else{
    setValue(e.target.value)
  }
}

  const decreaseValue = () => {
    if (value > 1) {
      setValue(Number(value) - 1);
    }
  };

  const increaseValue = () => {
    if (value < 50) {
      setValue(Number(value) + 1);
    }
  };

  const about = ()=> {
    setShowAbout(true)
  }

  const question = () =>{
    setShowAbout(false)
  }

  return (
    <>
    <Navbar about={about} question={question}  />
      {isClicked === false && !showAbout && (
        <div className="container my-3">
          <form action="">
          <div className="container my-3" style={{ width: "100%" }}>
            <h5>Number of Questions:</h5>

            <div className="input-group">
              <input
                type="number"
                defaultValue={1}
                className="form-control"
                min="1"
                max="50"
                value={value}
                placeholder="from 1-50"
                onChange={(e) => onQuestionInputChange(e)}
                // onChange={(e) => console.log(e.target.value)}
                style={{ marginRight: "10px" }}
                // onClick={this.select()}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="decreaseBtn"
                  onClick={decreaseValue}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="increaseBtn"
                  onClick={increaseValue}
                  style={{ marginLeft: "10px" }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="container my-3" style={{ width: "100%" }}>
            <h5>Select Category:</h5>
            <div className="input-group">
              <select
                className="form-select"
                aria-label=".form-select-lg example"
                value={category}
                onChange={handleChange}
              >
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="21">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">
                  Entertainment: Japanese Anime & Manga
                </option>
                <option value="32">Entertainment: Cartoon & Animations</option>
              </select>
            </div>
            {/* <p>Selected Value: {selectedValue}</p> */}
          </div>
          <div className="container my-3" style={{ width: "100%" }}>
            <h5>Select Difficulty:</h5>
            <div className="input-group">
              <select
                className="form-select"
                aria-label=".form-select-lg example"
                value={difficulty}
                onChange={handleChangeDifficulty}
              >
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            {/* <p>Selected Value: {selectedValue}</p> */}
          </div>
          </form>
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="d-flex justify-content-end btn btn-primary"
              onClick={() => setIsClicked(!isClicked)}
              // onClick={() => setIsClicked(true)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {isClicked === true && !showAbout && <Question rand = {Math.floor(Math.random()*4+1)} noOfQuestions={value} category={category} difficulty={difficulty}/>}
        {/* {showAbout && <h1>About</h1>} */}
    </>
  );
}
