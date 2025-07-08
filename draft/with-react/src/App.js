import logo from './logo.svg';
import { useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="Code with harry"/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>click</button>
      <Footer/>
    </div>
  );
}

export default App;
