import { useState } from "react";

export function Banner() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <br /><br />
        <h1 className="header center orange-text">FiberSpace</h1>
        <div className="row center">
          <h5 className="header col s12 light">Web Application powered by Fiber</h5>
        </div>
        <div className="row center">
          <button className="waves-effect waves-light btn-large orange" onClick={() => setClicks((clicks) => clicks + 1)}>
            Clicked {clicks} times
          </button>
        </div>
        <br /><br />
      </div>
    </div>
  );
}