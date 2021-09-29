import React, { useState } from "react";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";
import CreateType from "../../components/modals/CreateType";

import classes from './Admin.module.css'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <div className={classes.admin}>
      <div className={classes.btn}>
        <button onClick={() => setTypeVisible(true)}>Добавить тип</button>
      </div>
      <div className={classes.btn}>
        <button onClick={() => setBrandVisible(true)}>Добавить бренд</button>
      </div>
      <div className={classes.btn}>
        <button onClick={() => setDeviceVisible(true)}>Добавить устройство</button>
      </div>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </div>
  );
};

export default Admin;
