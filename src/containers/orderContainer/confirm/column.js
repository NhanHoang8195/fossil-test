import React from 'react';

function formatDate(timestamp, pattern='dd.MM.yyyy') {
  const date = new Date(timestamp);
  const d = date.getDate();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  return pattern.replace('dd', d).replace('MM', m).replace('yyyy', y);
}

function dateFormatter(cell) {
  return (<div>
    {formatDate(cell)}
  </div>);
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function totalFormatter(cell) {
  return (<div>
    {formatNumber(cell)}
  </div>);
}

function nameFormatter(cell, row) {
  return (<div className="col-name">
    <p className="name">{row.name}</p>
    <p className="level">Lv{row.level}</p>
  </div>);
}

export const columns = [
  {
    dataField: 'name',
    text: 'Name',
    headerStyle: { width: "25%", textAlign: 'center'},
    formatter: nameFormatter,
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