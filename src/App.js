import logo from './logo.svg';
import './App.css';

const long = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  long('abss', 'sfdfs');

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default App;
