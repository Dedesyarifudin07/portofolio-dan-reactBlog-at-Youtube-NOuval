import './App.css';
import { Link,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contect from './pages/Contect';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
   <div className='App'>
      <nav className='nav'>
            <h1> Dede syarifudin.com</h1>

          <div className='nav-list'>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/Profile' >Profile</Link></li>
            <li className='nav-item'><Link to='/Blog'>Blog</Link></li>
            <li className='nav-item'><Link to='/Contect'>COntect</Link></li>
          </div>

      </nav>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='Profile' element={<Profile/>}/>
       <Route path='Blog' element={<Blog/>}/>
       <Route path='Blog/:id' element={<BlogDetail/>}/>
       <Route path='Contect' element={<Contect/>}/>
     </Routes>
     </div>
  );
}

export default App;
