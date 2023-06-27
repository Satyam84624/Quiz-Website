import React from "react";
export default function Scorecard(props) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
        <div className="text-center">
          <h1 style={{ color: "white" }}>Score: {props.score}</h1>
        </div>
        <div>
          <form>
            <button
              type="submit"
              className="btn btn-primary "
              >
              ReTake
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
