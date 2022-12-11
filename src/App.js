import logo from './logo.svg';
import './App.css';

function App() {
  function hasS(att, def) {
    let itt = Math.max(att.length, def.length);
    let sur = 0;
    for (let i = 0; i < itt; i++) {
      (att[i] || 0) > (def[i] || 0)
        ? sur--
        : (att[i] || 0) < (def[i] || 0)
        ? sur++
        : (sur += 0);
      console.log(sur);
    }
    if (sur > 0) {
      return true;
    } else if (sur < 0) {
      return false;
    } else {
      return (
        def.reduce((acc, item) => acc + item) >=
        att.reduce((acc, item) => acc + item)
      );
    }
  }
  console.log(
    hasS(
      [31, 100, 6, 63, 59, 60, 14, 83, 41, 92],
      [31, 66, 90, 62, 57, 71, 47, 65, 87, 16]
    )
  );
}

export default App;
