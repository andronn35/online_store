import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Pagination, Form} from "react-bootstrap";
import { setLimit, setPage } from "../../redux/deviceReducer";
import classes from './Pages.module.css'
import { fetchDevices } from './../../redux/deviceReducer';

const Pages = () => {
  const [selectValue, setSelectValue] = useState('')
  const device = useSelector((state) => state.devices);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];
  const dispatch = useDispatch()

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  const onSelectChange = (e) => {
    setSelectValue(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, selectValue))
    selectValue && dispatch(setLimit(selectValue))   
    
  }, [selectValue, device.selectedType.id, device.selectedBrand.id, device.page, dispatch])

  return (
    <div>
      <div className={classes.showBy}>
        Показывать по:
          <select onChange={onSelectChange} value={selectValue}>
            <option value='5' default>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
          </select>
      </div>
      <Pagination className="mt-3">
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={device.page === page}
            activeLabel=''
            onClick={() => dispatch(setPage(page))}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Pages;
