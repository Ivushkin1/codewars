import logo from './logo.svg';
import './App.css';

function App() {
  function derDieDas(wort) {
    let vow = wort.match(/[aeiouäöü]/gi);
    if (vow) {
      vow = vow.length;
    }
    console.log(vow);

    if (vow > 3) {
      return `der ${wort}`;
    } else if (vow < 2) {
      return `das ${wort}`;
    } else {
      return `die ${wort}`;
    }
  }
  console.log(derDieDas('Kndl'));
}

export default App;
