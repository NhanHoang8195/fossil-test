import React from 'react';
import Pagination from '../../../components/pagination';
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
      pagination={<Pagination total={1200} sizePerpage={100} currentPage={2} />}
    />
  </div>);
}
export default OrderConFirm;
