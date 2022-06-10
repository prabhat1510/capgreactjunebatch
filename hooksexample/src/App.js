import './App.css';
import FavoriteColor from './components/FavoriteColor';
import Car from './components/Car';
import Timer from './components/Timer';
import Timers from './components/Timers';

function App() {
  return (
    <div className="App">
     <FavoriteColor />
     <Car />
     <Timer />
     <Timers />
    </div>
  );
}

export default App;
