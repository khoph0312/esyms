import React from 'react';
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
import { useSelector } from 'react-redux';
import Grid from "@mui/material/Grid"


const TableComponent = ({
  rows,
  columns
}) => {
  // const [page, setPage] = React.useState(0);
  const page = useSelector(state => state.page);
  const rowsPerPage = useSelector(state => state.rowNum);

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
              <TableCell>
                <Grid container justifyContent={"center"}>
                <img src={`${process.env.REACT_APP_IMG_URL}${row.img[0].src}`} alt="product item" width={100}  />
                </Grid>
              </TableCell>
              <TableCell>
                {row.name.en}
              </TableCell>
              <TableCell>
                {(Math.round(row.price * 100) / 100).toFixed(2)}
              </TableCell>
              <TableCell>
                {row.rating === null ? "N/A" : row.rating}
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
              rowsPerPage={rowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </TableContainer>
  )
}

export default TableComponent;