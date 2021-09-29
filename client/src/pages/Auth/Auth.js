import React from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../components/utils/consts";
import classes from "./Auth.module.css";
import { useState } from "react";
import { login, registration } from "../../api/api";
import { useDispatch } from "react-redux";
import { setIsAuth, loginUser } from './../../redux/userReducer';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch()

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        console.log(data);
      }
      dispatch(setIsAuth(true))
      dispatch(loginUser(data))
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={classes.auth}>
      <div>
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Введите ваш email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Введите ваш пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={classes.footer}>
        <div>
          {isLogin ? (
            <div>
              Нет аккаунта?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </div>
          ) : (
            <div>
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
            </div>
          )}
        </div>
        <div>
          <button onClick={click}>{isLogin ? "Войти" : "Регистрация"}</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
