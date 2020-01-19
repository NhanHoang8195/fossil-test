import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import './styles.scss';

function onJumpToPage(initialTypeText, onForce, totalPage) {
  function onClick(e) {
    e.stopPropagation();
    const page = initialTypeText === 'First' ? 0 : totalPage;
    onForce(page);
  }
  return (<div>
    <button className="force-page-btn" onClick={onClick}>{initialTypeText}</button>
  </div>);
}

function PaginationCustom(props) {
  const { total, sizePerpage, currentPage } = props;
  const [forcePage, setForcePage] = useState(currentPage - 1);
  const totalPage =  Math.ceil(total/sizePerpage);

  const firstElement = onJumpToPage('First', setForcePage, totalPage - 1);
  const lastElement = onJumpToPage('Last', setForcePage, totalPage - 1);
  function handlePageChange({ selected }) {
    setForcePage(selected);
  }
  return (<div className="pagination-custom">
    <p className="total-records">You have: {total} orders</p>
    <ReactPaginate
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      forcePage={forcePage}
      pageCount={totalPage}
      onPageChange={handlePageChange}
      previousLabel={firstElement}
      nextLabel={lastElement}
      breakLabel='...'
      breakClassName='pagination-item'
      containerClassName='pagination pagination-container'
      pageClassName='pagination-item'
      activeClassName='active'
      previousLinkClassName='last-btn'
      nextLinkClassName="last-btn"

    />
  </div>);
}

PaginationCustom.propTypes = {
  total: PropTypes.number.isRequired,
  sizePerpage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationCustom;
