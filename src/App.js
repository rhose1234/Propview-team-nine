import './css/style.css';
import Homepage from './Home';
import Privacy from './privacy';
import Error404 from './error404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
      
        <div className="content">
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/privacy' element={<Privacy/>} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;