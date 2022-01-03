import './App.css';
import Header from './component/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' exact element={<Home />} />  
          <Route path='/Cart' exact element={<Cart />} />  
        </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
