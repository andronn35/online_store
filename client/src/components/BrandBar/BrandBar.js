import React from 'react';
import classes from './BrandBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBrand } from './../../redux/deviceReducer';

const BrandBar = () => {

  const brands = useSelector(state => state.devices.brands)
  const selectedBrand = useSelector(state => state.devices.selectedBrand)
  const dispatch = useDispatch()

  const brandElement = brands.map(item =>
      <div
        className={selectedBrand.id && item.id === selectedBrand.id ? classes.selected : classes.brandsElement}
        key={item.id}
        onClick={() => dispatch(setSelectedBrand(item))}
      >        
        {item.name}
      </div>
    )

  return (
    <div className={classes.brandBar}>
      {brandElement}
    </div>
  );
}

export default BrandBar;
