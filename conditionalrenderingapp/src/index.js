import ReactDOM from 'react-dom/client';
import Greeting from './components/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//Component to render
    <Greeting isLoggedIn={true} />
);