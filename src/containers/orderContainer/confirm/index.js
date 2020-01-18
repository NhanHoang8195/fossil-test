import React from 'react';
import DataTable from '../../../components/dataTable';
import mockData from '../../../mockData/dataTable.json';
import { columns } from './column';
import './styles.scss';

function OrderConFirm(props) {
  return (<div className='order-confirm-tab'>
    <p className="text-notification">You have <span className='waiting-number'>{mockData.waiting}</span> orders, waiting for your confirm</p>
    <DataTable
      keyField='orderId'
      data={mockData.data}
      columns={columns}
    />
  </div>);
}
export default OrderConFirm;
