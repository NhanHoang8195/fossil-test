import React from 'react';
import { Pagination } from 'react-bootstrap';
import DataTable from '../../../components/dataTable';
import mockData from '../../../mockData/dataTable.json';
import { columns } from './column';
import './styles.scss';

function getPagination(currentPage = 1, total, sizePerpage = 10) {
  const page = Math.ceil(total / sizePerpage);
 return (<Pagination>
   <Pagination.First>First</Pagination.First>
   {  }
   <Pagination.Item>{page}</Pagination.Item>
   <Pagination.Last>Last</Pagination.Last>
 </Pagination>);
}

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
