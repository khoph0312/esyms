import React, { useState } from 'react';
import './App.css';
import Table from "./components/table"
import columns from "./data/columns.json"
import { AppContainer } from "./styles";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Grid } from '@mui/material';
import axios from "axios";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const App = (store) => {
  
  const [searchContent, setSearchContent] = useState(null);
  const [filteredRows, setFilteredRows] = useState([]);

  const onSearchChange = (event) => {
    setSearchContent(event.target.value);
  }

  const searchItem = () => {
    if (searchContent === null || searchContent === "") {
      setFilteredRows([]);
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}${searchContent}`)
        .then((response) => {
          setFilteredRows(response.data.results.docs);
        })
    }
  }

  return (
    <AppContainer className="App" >
      <Grid container>
        <Grid xs={12} style={{padding: "10px"}}>
        <InputLabel>Search for Item</InputLabel>
          <OutlinedInput
            onChange={onSearchChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={searchItem}
                  edge="end"
                >
                  {<SearchIcon />}
                </IconButton>
              </InputAdornment>
            }
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