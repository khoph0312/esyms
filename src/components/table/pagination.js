import React from "react"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles';


const TablePaginationComponent = ({
    rows,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage
}) => {
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value));
      setPage(0);
    };

    const TablePaginationActions = (props) => {
        const theme = useTheme();
        const { count, page, rowsPerPage, onPageChange } = props;
    
        const handleBackButtonAction = (event) => {
            onPageChange(event, page - 1);
        };
    
        const handleNextButtonAction = (event) => {
            onPageChange(event, page + 1);
        };
    
        return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleBackButtonAction}
                disabled={page === 0}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonAction}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
        </Box>
        );
    }

    return (
        <TablePagination
            rowsPerPageOptions={[5, 7, { label: 'All', value: -1 }]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
                native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
            sx={{width: "100%"}}
        />
    )
}

export default TablePaginationComponent