import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

import './styles.scss';

function DataTable(props) {
  const { keyField, data, columns, pagination  } = props;

  return (<div className="data-table-common">
      <BootstrapTable
        bordered={false}
        keyField={keyField}
        data={data}
        columns={columns}
        headerClasses="header-table"
        rowClasses="body-row-table"
      />
    {pagination}
  </div>);
}

DataTable.propTypes = {
  keyField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  pagination: PropTypes.object,
};
export default DataTable;
