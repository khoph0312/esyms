import React, {useState, useEffect} from 'react';
import './App.css';
import Table from "./components/table"
import rows from './data/rows.json'
import columns from "./data/columns.json"
import { AppContainer } from "./styles";
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const App = (store) => {
  
  const [searchContent, setSearchContent] = useState(null);
  const [filteredRows, setFilteredRows] = useState(rows);

  const onSearchChange = (event) => {
    setSearchContent(event.target.value);
  }

  useEffect(() => {
    if (searchContent === null || searchContent === "") {
      setFilteredRows(rows);
    } else {
      setFilteredRows(rows.filter(({productName}) => {
        return productName.includes(searchContent.toLowerCase());
      }))
    }
  }, [searchContent])

  return (
    <AppContainer className="App" >
      <Grid container>
        <Grid xs={12} style={{padding: "10px"}}>
          <TextField
            label="Type here to search"
            onChange={onSearchChange}
          />
        </Grid>
        <Grid container xs={12} justifyContent="center">
          <Table rows={filteredRows} columns={columns} store={store} />
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default App;