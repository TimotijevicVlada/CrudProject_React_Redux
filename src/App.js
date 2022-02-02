import './style/App.css';
import Navbar from './components/static/Navbar';
import Table from './components/pages/Table';
import Galery from './components/pages/Galery';
import Todo from './components/pages/Todo';
import Auth from './components/pages/auth/Auth';
import Header from './components/static/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/static/Footer';

function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <div className='pages'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/table" element={<Table />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
