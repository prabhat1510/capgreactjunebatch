import Login from './components/Login';
import LoginForm from './components/LoginForm'
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav style={{borderBottom:"solid 1px", paddingBottom: "1rem",
        }}>
            <Link to="/login">LoginForm</Link> | {"   "}
           
        </nav>
    </div>
  );
}

export default App;
