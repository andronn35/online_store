import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBasketDevices } from '../../redux/basketReducer';
import { useParams } from 'react-router';

const Basket = () => {

  const dispatch = useDispatch()
  const {id} = useParams()  

  useEffect(() => {
    dispatch(fetchBasketDevices(id))
  }, [])

  const user = useSelector(state => state.user.user)
  const basketDevicesList = useSelector(state => state.basket.basketDevicesList)  

  const deviseElement =  basketDevicesList.map(item => 
    <div>
      {item.name}
    </div>)

  return (
    <div>
      {deviseElement}
    </div>
  );
}

export default Basket;
