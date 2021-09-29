import React from 'react';
import classes from './Preloade.module.css'
import preloader from '../../img/259.gif'

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt='preloader'/>
    </div>
  );
}

export default Preloader;
