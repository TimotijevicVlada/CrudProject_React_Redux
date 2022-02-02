import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/static/Navbar';
import Table from './components/pages/Table';
import Galery from './components/pages/Galery';
import Todo from './components/pages/Todo';
import Header from './components/static/Header';
import Login from './components/pages/auth/Login';
import Signup from "./components/pages/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/static/Footer';
import './style/App.css';

function App() {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.login);
  const { user } = currentUser;
  const allUsers = useSelector(state => state.signup);
  const { users } = allUsers;

  //I have to put these functions in this component to save user and users after refreshing pages
  //Get users from localStorage
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("auth"));
    if (storage) {
      dispatch({ type: "GET_STORAGE_USERS", payload: storage.users });
      dispatch({ type: "LOGIN_USER", payload: storage.user });
    }
  }, [dispatch])

  //Save users in localStorage
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify({ users: users, user: user }))
  })

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='pages'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
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
