import './App.css';
import {
  BrowserRouter,
  // Link,
  Route,
  Routes
} from "react-router-dom";

//Pages:
import Home from './pages/home';
import About from './pages/about';
import Shopping from './pages/shopping';


function App() {


  return (
    <BrowserRouter>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop Here</Link>
      </nav> */}
        <div className='App'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/shopping' element={<Shopping/>}></Route>
            </Routes>
        </div>

    </BrowserRouter>
  );
}

export default App;
