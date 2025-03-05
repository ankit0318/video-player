import { useState } from "react";

import "./App.css";

function App() {
  const [reciver, setReciver] = useState("muskaan");

  return (
    <>
      <div className="container">
        <div>
          <button onClick={() => setReciver("muskaan")}>muskaan</button>
          <br />
          <button onClick={() => setReciver("neelam")}>neelam</button>
          <br />
          <button onClick={() => setReciver("ankit")}>ankit</button>
          <br />
        </div>
        <div>
          <textarea
            placeholder={"chat to " + reciver}
          ></textarea>
          <br />
          <a href={`mailto:${reciver}@mail.com`}>
            <button>send to {reciver}@mail.com </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
