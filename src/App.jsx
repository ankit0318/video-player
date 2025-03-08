import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [now, setNow] = useState(null);
  const startTime = useRef(null);
  const intervalRef = useRef(null);
  const logsRef = useRef([]);
  let secondsPassed = 0;

  if (startTime.current != null && now != null) {
    secondsPassed = (now - startTime.current) / 1000;
  }

  function handleStart() {
    startTime.current = Date.now();
    setNow(Date.now());
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => setNow(Date.now()), 10);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      logsRef.current.push(secondsPassed.toFixed(3));
    }
  }

  return (
    <>
      <h1>time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <h2>Logs:</h2>
      <ul className="logs">
        {logsRef.current.map((log, index) => (
          <li key={index}>{log} seconds</li>
        ))}
      </ul>
    </>
  );
}

export default App;
