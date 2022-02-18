import React, {useState} from 'react';
import './styles';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TablePagination from "./pagination";
import { display, width } from '@mui/system';

const TableComponent = ({
  rows,
  columns
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
  return (
    <TableContainer component={Paper} sx={{width: "1000px"}}>
      <Table> 
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell style={{ width: 160 }}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ width: 100 }}>
                {row.id}
              </TableCell>
              <TableCell style={{ width: 100 }}>
                {row.productName}
              </TableCell>
              <TableCell style={{ width: 100 }}>
                {row.price}
              </TableCell>
              <TableCell style={{ width: 100 }}>
                {row.width}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination 
              rows={rows} 
              page={page} 
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </TableContainer>
  )
}

export default TableComponent;