import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import './styles.scss';

function PaginationCustom(props) {
  const { total, sizePerpage, currentPage } = props;

  const totalPage =  Math.ceil(total/sizePerpage);
  return (<div className="pagination-custom">
    <p className="total-records">You have: {total} orders</p>
    <Pagination className="pagination-content">
      <Pagination.First>First</Pagination.First>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{totalPage}</Pagination.Item>
      <Pagination.Last>Last</Pagination.Last>
    </Pagination>
  </div>);
}

PaginationCustom.propTypes = {
  total: PropTypes.number.isRequired,
  sizePerpage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationCustom;
