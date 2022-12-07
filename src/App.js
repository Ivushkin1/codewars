import logo from './logo.svg';
import './App.css';

function App() {
  function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    let newstr = str.split('').forEach((item) => {
      if (vowels.find((vow) => vow === item)) {
        count++;
      }
    });

    return count;
  }

  console.log(getCount('sdfefaihoeeoouay'));

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default App;
