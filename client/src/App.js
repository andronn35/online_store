import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { check } from "./api/api";
import { setIsAuth } from './redux/userReducer';
import Preloader from "./components/Preloader/Preloader";

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    check().then(data => {
      dispatch(setIsAuth(true))
    }).finally(() => setLoading(false))
  } ,[dispatch])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
