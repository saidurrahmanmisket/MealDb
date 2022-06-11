import './App.css';
import Card from './components/card/Card'
import Header from './components/header/Header.js'



function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
          <Card />
      </div>
    </div>
  );
}

export default App;
