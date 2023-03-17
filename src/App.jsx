import Navbar from "./navbar.jsx";
import Home from './home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./create.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact
                   path='/'
                   element={<Home/>}
            >
            </Route>
            <Route path='/create'
                   element={<Create/>}
            >
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
