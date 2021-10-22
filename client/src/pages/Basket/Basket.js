import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBasketDevices } from '../../redux/basketReducer';
import { useParams } from 'react-router';
import classes from './Basket.module.css';

const Basket = () => {

  const dispatch = useDispatch()
  const {id} = useParams()  
  const serverUrl = 'http://localhost:5000/'

  useEffect(() => {
    dispatch(fetchBasketDevices(id))
  }, [])

  const user = useSelector(state => state.user.user)
  const basketDevicesList = useSelector(state => state.basket.basketDevicesList)  

  const deviseElement =  basketDevicesList.map(item => 
    <div className={classes.deviseElement}>
      <div>
        {item.name}      
      </div>
        <img src={serverUrl + item.img} atl='alt' width='70px' />
      <div>
        Стоимость: {item.price} Р
      </div>
    </div>
    )

  return (
    <div>
      {deviseElement}
    </div>
  );
}

export default Basket;
