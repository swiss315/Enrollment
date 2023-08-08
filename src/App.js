import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Enrollment from './Enrollment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index exact element={<Enrollment/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
