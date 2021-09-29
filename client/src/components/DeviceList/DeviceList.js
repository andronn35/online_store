import React from 'react';
import classes from './DeviceList.module.css'
import { useSelector } from 'react-redux';
import DeviceItem from '../DeviceItem/DeviceItem';

const DeviceList = () => {

  const devices = useSelector(state => state.devices.devices)

  const devicesElement = devices.map(item => 
      <div className={classes.devicesElement} key={item.id}>
        <DeviceItem 
          device={item}
        />
      </div>
    )

  return (
    <div className={classes.deviceList}>
      {devicesElement}
    </div>
  );
}

export default DeviceList;
