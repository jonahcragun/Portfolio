import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="Menu">
            <p>Jonah Cragun</p>
            <button>About</button>
            <button>Education</button>
            <button>Portfolio</button>
            <button>Contact</button>
        </div>
        <Content />
    </div>
  );
}

const Content = () => {
    return (
        <div className="Content">
            content here
        </div>
    )
}

export default App;

