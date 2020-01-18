import { dateFormatter, totalFormatter } from '../../../util';

export const columns = [
  {
    dataField: 'name',
    text: 'Name',
    headerStyle: { width: "30%", textAlign: 'center'},
  },
  {
    dataField: 'quanlity',
    text: 'Quanlity',
    headerStyle: { width: "10%", textAlign: 'center' },
    align: 'center',
  },
  {
    dataField: 'dateOrder',
    text: 'Date Order',
    headerStyle: { width: "20%", textAlign: 'center' },
    formatter: dateFormatter,
    align: 'center',
  },
  {
    dataField: 'orderId',
    text: 'Order ID',
    headerStyle: { width: "20%", textAlign: 'center' },
    align: 'center',
  },
  {
    dataField: 'total',
    text: 'Total',
    headerStyle: { width: "20%", textAlign: 'center' },
    formatter: totalFormatter,
    align: 'center',
  },
];