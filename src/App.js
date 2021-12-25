import './App.css';
import Timer from './components/timer';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h2>Timer</h2>
      </header>
      <Timer time={7} step={1000} autostart={true} onTick={(time) => console.log("Залишилось часу: " + time)} />
    </div>
  );
}

export default App;
