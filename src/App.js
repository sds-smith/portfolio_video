import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';

import './App.css';
import Home from './routes/home/home.component';
import Portfolio from './routes/portfolio/portfolio.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
