import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
function App() {
  return (
  <Router>
    <Header/>
  </Router>  
  );
}
export default App;
