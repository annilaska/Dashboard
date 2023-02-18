import './App.css'
import MainDash from './components/mainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import { HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
        </div>  
      </HashRouter>
    </div>
  );
}

export default App;

