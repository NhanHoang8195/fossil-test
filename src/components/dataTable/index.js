import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import './styles.scss';

function DataTable(props) {
  const { keyField, data, columns } = props;

  return (<div className="data-table-common">
      <BootstrapTable
        bordered={false}
        keyField={keyField}
        data={data}
        columns={columns}
        headerClasses="header-table"
        rowClasses="body-row-table"
      />
  </div>);
}

DataTable.propTypes = {
  keyField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};
export default DataTable;
