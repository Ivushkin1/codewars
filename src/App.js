import logo from './logo.svg';
import './App.css';

function App() {
  function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let arr = str.split('').filter((item) => {
      return vowels.indexOf(item) === -1;
    });

    return arr.join('');
  }

  console.log(disemvowel('sdfefaihoe eoou dfgay ewftey'));

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default App;
