
import './App.css';
import CreateBoard from './utils/CreateBoard';

const Board=()=>{
  let x=CreateBoard(10,10,5);
  return x;
}


function App() {
  return (
    <div className="App">
      <h1>{Board}</h1>
    </div>
  );
}

export default App;
