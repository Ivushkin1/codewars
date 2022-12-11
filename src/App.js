import logo from './logo.svg';
import './App.css';

function App() {
  function numberJoy(n) {
    let sum = n
      .toString()
      .split('')
      .reduce((acc, item) => +acc + +item);
    let sum2 = +sum.toString().split('').reverse().join('');
    if (sum * sum2 === n) {
      return true;
    } else return false;
  }

  console.log(numberJoy(1729));
}

export default App;
