import logo from './logo.svg';
import './App.css';

function App() {
  function descendingOrder(n) {
    let arr = n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('');
    return +arr;
  }
  console.log(descendingOrder(23876));
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default App;
