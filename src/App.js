import logo from './logo.svg';
import './App.css';
import Greet, { Namaste } from './component/Greet'
import Welcome from './component/Welcome';
import EvnetBind from './component/EvnetBind';
import Parent from './component/Parent';
import Form from './component/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Namaste/>
        <Greet/>
        <Welcome/>
        <EvnetBind/>
        <Parent></Parent>
        <Form/>
      

      </header>
    </div>
  );
}

export default App;
