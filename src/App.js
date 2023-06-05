import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './Components/Header';
import BasicTable from './Components/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <BasicTable/>
      
    </div>
  );
}

export default App;
