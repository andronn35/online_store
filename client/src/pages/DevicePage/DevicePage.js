import classes from './DevicePage.module.css'
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { deviceAPI } from '../../api/api';

const serverUrl = 'http://localhost:5000/'

const DevicePage = () => {
  const [device, setDevice] = useState('')
  const {id} = useParams()

  useEffect(() => {
    deviceAPI.fetchOneDevice(id).then(data => setDevice(data))
  } ,[id])
  console.log(device.data);

  return (
    <div className={classes.devicePage}>
      {device && 
      <div>
        <div className={classes.deviceCard}>
          <div className={classes.deviceImgName}>
            <div className={classes.deviceImg}>
              <img src={serverUrl + device.data.img} alt='device'/>
            </div>
            <div className={classes.deviceName}>
              {device.data.name}
            </div>
          </div>
  
          <div className={classes.priceBtn}>
            <div className={classes.price}>
              От {device.data.price} р.
            </div>
            <div className={classes.btn}>
              <button>В корзину</button>
            </div>
          </div>
        </div>
        <div className={classes.options} >
          {device.data.info.map((item, index) => 
            <div className={index % 2 === 0 ? classes.dark : classes.light}>{item.title}: {item.description}</div>)}
        </div>
      </div>
      }
    </div>
  );
}

export default DevicePage;
