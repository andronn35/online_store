import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeviceList from '../../components/DeviceList/DeviceList';
import TypeBar from '../../components/TybeBar/TypeBar';
import { fetchDevices, fetchTypes } from '../../redux/deviceReducer';
import BrandBar from './../../components/BrandBar/BrandBar';
import classes from './Shop.module.css'
import { fetchBrands } from './../../redux/deviceReducer';
import Pages from '../../components/Pages/Pages';

const Shop = () => {

  const dispatch = useDispatch()
  const device = useSelector(state => state.devices)

  useEffect(() => {
    dispatch(fetchTypes())
    dispatch(fetchBrands())
    dispatch(fetchDevices(null, null, 1, 4))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit))
  }, [device.selectedType, device.selectedBrand, device.page, device.limit, dispatch])

  return (
    <div className={classes.shop}>
      <div className={classes.leftShop}>
        <TypeBar />
      </div>
      <div className={classes.rightShop}>
        <BrandBar />
        <DeviceList />
        <Pages />
      </div>
    </div>
  );
}

export default Shop;
