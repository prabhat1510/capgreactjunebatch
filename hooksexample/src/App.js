import './App.css';
import FavoriteColor from './components/FavoriteColor';
import Car from './components/Car';
import Timer from './components/Timer';
import Timers from './components/Timers';
import Component1 from './components/usecontextexample/Component1';

function App() {
  return (
    <div className="App">
     <FavoriteColor />
     <Car />
     <Timer />
     <Timers />
     <Component1 />
    </div>
  );
}

export default App;
