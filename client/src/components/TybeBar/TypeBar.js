import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedType } from '../../redux/deviceReducer';
import classes from './TypeBar.module.css'

const TypeBar = () => {

  const types = useSelector(state => state.devices.types)
  const selectedType = useSelector(state => state.devices.selectedType)
  const dispatch = useDispatch()

  const typesElement = types.map(item => 
      <div
        className={selectedType.id && item.id === selectedType.id ? classes.selected : classes.typesElement}
        key={item.id}
        onClick={() => dispatch(setSelectedType(item))}
      >
        {item.name}
      </div>
    )

  return (
    <div className={classes.typeBar}>
      {typesElement}
    </div>
  );
}

export default TypeBar;
