import React from 'react';
import { useHistory } from 'react-router';
import { DEVICE_ROUTE } from '../utils/consts';
import classes from './DeviceItem.module.css'

const serverUrl = 'http://localhost:5000/'

const DeviceItem = (props) => {
  const history = useHistory()
  return (
    <div className={classes.deviceItem} onClick={() => history.push(DEVICE_ROUTE + '/' + props.device.id)}>
      <div className={classes.deviceImg}>
        <img src={serverUrl + props.device.img} alt='q'/>
      </div>
      <div className={classes.desc}>
        <div>{props.device.name}</div>
        <div>{props.device.price} Р</div>
      </div>      
    </div>
  );
}

export default DeviceItem;
