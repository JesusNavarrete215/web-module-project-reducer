import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";

import { applyNumber, changeOperation, clearDisplay } from "./actions";
import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  //we need to set the useReducer and deconstruct
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddOne = (e) => {
  //   dispatch(addOne());
  //   console.log("clicked");
  // };

  const handleApplyNumber = (e) => {
    dispatch(applyNumber(parseInt(e.target.innerText)));

    console.log(e.target.innerText);
  };

  const handleOperation = (e) => {
    dispatch(changeOperation(e.target.innerText));
  };

  const handleClear = (e) => {
    dispatch(clearDisplay());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber} />
              <CalcButton value={2} onClick={handleApplyNumber} />
              <CalcButton value={3} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber} />
              <CalcButton value={5} onClick={handleApplyNumber} />
              <CalcButton value={6} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber} />
              <CalcButton value={8} onClick={handleApplyNumber} />
              <CalcButton value={9} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation} />
              <CalcButton value={"*"} onClick={handleOperation} />
              <CalcButton value={"-"} onClick={handleOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
