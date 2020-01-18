import React from 'react';

function formatDate(timestamp, pattern='dd.MM.yyyy') {
  const date = new Date(timestamp);
  const d = date.getDate();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  return pattern.replace('dd', d).replace('MM', m).replace('yyyy', y);
}

export function dateFormatter(cell) {
  return (<div>
    {formatDate(cell)}
  </div>);
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export function totalFormatter(cell) {
  return (<div>
    {formatNumber(cell)}
  </div>);
}