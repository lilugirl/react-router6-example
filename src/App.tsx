import React from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/Blog/detail';
import BlogList from './pages/Blog/list';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      
       <Router>
         <div style={{backgroundColor:'gray',padding:'10px'}}>
         <nav>
           <Link to="/" style={{marginRight:'10px'}}>首页</Link>
           <Link to="/login" style={{marginRight:'10px'}}>登陆</Link>
           <Link to="/about" style={{marginRight:'10px'}}>关于</Link>
           <Link to="/blog">博客</Link>
         </nav>
         </div>
         <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/blog" element={<Blog/>}>
            <Route path="/" element={<BlogList/>}></Route>
            <Route path=":id" element={<BlogDetail/>}></Route>
         </Route>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
