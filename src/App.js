import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function Apple() {

  const data = "I am john ";
  return (
    <div className="App">
      <Home data={data} hello={"I am hello"} />
    </div>
  );
}

export default Apple;
