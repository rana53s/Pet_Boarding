import axios from "axios";
import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";

export const HomePage = () => {
  const [entity, setEntity] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/entities").then((res) => {
      setEntity([...res.data]);
    });
  };

  return (
    <>
      <h2 style={{ textAlign: "left", color: "teal", fontWeight: "bolder" }}>
        Welcome to Bos Site
      </h2>

      {/* SORTING and FILTERING */}
      <div className="sort-filter" style={{ display: "flex", justifyContent: 'space-between' }}>
        <div style={{ display: "flex" }}>
          <Box width="150px">
            <TextField label="Sort By Cost" select fullWidth>
              <MenuItem value="ascCost">Ascending</MenuItem>
              <MenuItem value="dscCost">Descending</MenuItem>
            </TextField>
          </Box>
          <Box width="150px">
            <TextField label="Sort By Rating" select fullWidth>
              <MenuItem value="ascRat">Ascending</MenuItem>
              <MenuItem value="dscRat">Descending</MenuItem>
            </TextField>
          </Box>
        </div>
        {/* Filter BY */}
        <div style={{ display: "flex" }}>
          <Box width="150px">
            <TextField label="Filter By City" select fullWidth>
              <MenuItem value="agt">Agartala</MenuItem>
              <MenuItem value="kol">Kolkata</MenuItem>
            </TextField>
          </Box>
          <Box width="150px">
            <TextField label="Filter by Verified" select fullWidth>
              <MenuItem value="true">true</MenuItem>
              <MenuItem value="false">false</MenuItem>
            </TextField>
          </Box>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Capacity</TableCell>
              <TableCell align="center">Cost/Day</TableCell>
              <TableCell align="center">Verified</TableCell>
              <TableCell align="center">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entity.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.Name}</TableCell>
                <TableCell align="center">{row.City}</TableCell>
                <TableCell align="center">{row.Address}</TableCell>
                <TableCell align="center">{row.Capacity}</TableCell>
                <TableCell align="center">{row.CostPerDay}</TableCell>
                <TableCell align="center">{row.Verified}</TableCell>
                <TableCell align="center">{row.Rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
