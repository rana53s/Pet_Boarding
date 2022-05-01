import axios from "axios";
import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
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
  Link,
  Typography,
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
  // let history = useHistory();

  const handleSort = (sortBy, order) => {
    if (sortBy === "costperday" && order === 1)
      setEntity((prev) => [
        ...prev.sort((a, b) => a.costperday - b.costperday),
      ]);
    else if (sortBy === "costperday" && order === -1)
      setEntity((prev) => [
        ...prev.sort((a, b) => b.costperday - a.costperday),
      ]);
    else if (sortBy === "rating" && order === 1)
      setEntity((prev) => [...prev.sort((a, b) => a.rating - b.rating)]);
    else if (sortBy === "rating" && order === -1)
      setEntity((prev) => [...prev.sort((a, b) => b.rating - a.rating)]);
  };

  const handleFilter = (type) => {
    let arr = [];

    if (type === "agt") {
      axios.get("http://localhost:8080/entities").then((res) => {
        res.data.map((el) => {
          if (el.city === "Agartala") {
            arr.push(el);
          }
        });
      });
      setEntity(arr);
    }
    else if (type === "kol") {
      axios.get("http://localhost:8080/entities").then((res) => {
        res.data.map((el) => {
          if (el.city === "Kolkata") {
            arr.push(el);
          }
        });
      });
      setEntity(arr);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "left", color: "teal", fontWeight: "bolder" }}>
        Welcome to Bos Site
      </h2>

      {/* SORTING and FILTERING */}
      <div
        className="sort-filter"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex" }}>
          <Box width="150px">
            <TextField label="Sort By Cost" select fullWidth>
              <MenuItem
                value="ascCost"
                onClick={() => handleSort("costperday", 1)}
              >
                Ascending
              </MenuItem>
              <MenuItem
                value="dscCost"
                onClick={() => handleSort("costperday", -1)}
              >
                Descending
              </MenuItem>
            </TextField>
          </Box>
          <Box width="150px">
            <TextField label="Sort By Rating" select fullWidth>
              <MenuItem value="ascRat" onClick={() => handleSort("rating", 1)}>
                Ascending
              </MenuItem>
              <MenuItem value="dscRat" onClick={() => handleSort("rating", -1)}>
                Descending
              </MenuItem>
            </TextField>
          </Box>
        </div>
        {/* Filter BY */}
        <div style={{ display: "flex" }}>
          <Box width="150px">
            <TextField label="Filter By City" select fullWidth>
              <MenuItem value="agt" onClick={() => handleFilter("agt")}>
                Agartala
              </MenuItem>
              <MenuItem value="kol" onClick={() => handleFilter("kol")}>
                Kolkata
              </MenuItem>
            </TextField>
          </Box>
          <Box width="150px">
            <TextField label="Filter by Verified" select fullWidth>
              <MenuItem value="true" onClick={() => handleFilter("true")}>
                true
              </MenuItem>
              <MenuItem value="false" onClick={() => handleFilter("false")}>
                false
              </MenuItem>
            </TextField>
          </Box>
        </div>
      </div>

      {/* ...............TABLE DATA............... */}
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

          {/* Showing the table */}
          <TableBody>
            {entity.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                // onClick={() => {
                //   history.push(`/listing/${row.id}`);
                // }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.capacity}</TableCell>
                <TableCell align="center">{row.costperday}</TableCell>
                <TableCell align="center">{row.verified}</TableCell>
                <TableCell align="center">{row.rating}</TableCell>
                <Typography variant="p">
                  <Link underline="none" href="/listing">
                    See Details
                  </Link>
                </Typography>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

//to={`/listing/${row.id}`}
