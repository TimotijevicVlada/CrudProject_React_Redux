import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.login);
  const { user } = currentUser;

  return (
    <header className='header'>
      <div className='logo'>Welcome to our website</div>
      <div className='pages'>
        {user ?
          (<div className='curr_user'>
            <span className='user_me'>{user?.username[0]}</span>
            <span className='logout' onClick={() => dispatch(dispatch({ type: "LOGIN_USER", payload: null }))}>Logout</span>
          </div>) :
          (<div className='authentication'>
            <Link to="/login" className='auth'>Login</Link>
            <Link to="/" className='auth'>Signup</Link>
          </div>)
        }
      </div>
    </header>
  )
};

export default Header;
