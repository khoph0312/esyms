import logo from './logo.svg';
import './App.css';
import Table from "./components/table"
import rows from './data/rows.json'
import columns from "./data/columns.json"

function App() {
  return (
    <div className="App" style={{display: "flex", justifyContent: "center"}}>
      <Table rows={rows} columns={columns} />
    </div>
  );
}

export default App;
