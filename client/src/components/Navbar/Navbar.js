import React from 'react';
import classes from './NavBar.module.css'
import logo from '../../img/vologda-vikings-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUser, setIsAuth } from './../../redux/userReducer';

const Navbar = () => {

  const isAuth = useSelector(state => state.user.isAuth)
  const user = useSelector(state => state.user.user )
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(setIsAuth(false))
    dispatch(loginUser({}))
    localStorage.removeItem('token')
  }

  return (
    <div className={classes.navBar}>
      <NavLink to='/'>
        <div  className={classes.logo}>
          <img src={logo} alt='logo'/>
        </div>
      </NavLink>
      
        {isAuth ? 
        <div className={classes.buttons}>
          <NavLink to={user && "/basket/" + user.id}>
            <div className={classes.basket}>
              <div className={classes.basketCount}>
                0
              </div>
            </div>
          </NavLink>
          <div>
            <NavLink to="/admin"><button>Админ панель</button></NavLink>
          </div>
          <div>
            <NavLink to="/login" onClick={logOut}><button>Выйти</button></NavLink>
          </div>
        </div>
        :
        <div className={classes.buttons}>
          <NavLink to="/login"><button>Авторизация</button></NavLink>
        </div>
        }
      
    </div>
  );
}

export default Navbar;
