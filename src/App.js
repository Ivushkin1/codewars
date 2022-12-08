import logo from './logo.svg';
import './App.css';

function App() {
  function maskify(cc) {
    let len = cc.length < 4 ? 0 : cc.length;
    return '#'.repeat(len) + cc.split('').splice(-4).join('');
  }

  console.log(maskify('1'));

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default App;
