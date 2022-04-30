import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
// import { useState } from "react";

export const MUIDemo = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map( row => (
            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}} >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
  "id": 1,
  "first_name": "Calv",
  "last_name": "Mulrooney",
  "email": "cmulrooney0@google.com.hk",
  "gender": "Male"
}, {
  "id": 2,
  "first_name": "Emyle",
  "last_name": "Holtham",
  "email": "eholtham1@adobe.com",
  "gender": "Female"
}, {
  "id": 3,
  "first_name": "Arlen",
  "last_name": "Muzzullo",
  "email": "amuzzullo2@reference.com",
  "gender": "Male"
}, {
  "id": 4,
  "first_name": "Shanan",
  "last_name": "Jarrold",
  "email": "sjarrold3@cisco.com",
  "gender": "Genderqueer"
}, {
  "id": 5,
  "first_name": "Lorinda",
  "last_name": "Leavry",
  "email": "lleavry4@tumblr.com",
  "gender": "Genderfluid"
}, {
  "id": 6,
  "first_name": "Skipp",
  "last_name": "Simonot",
  "email": "ssimonot5@intel.com",
  "gender": "Male"
}, {
  "id": 7,
  "first_name": "Aurora",
  "last_name": "Marunchak",
  "email": "amarunchak6@salon.com",
  "gender": "Female"
}, {
  "id": 8,
  "first_name": "Herschel",
  "last_name": "Callacher",
  "email": "hcallacher7@macromedia.com",
  "gender": "Male"
}, {
  "id": 9,
  "first_name": "Dalis",
  "last_name": "Fancutt",
  "email": "dfancutt8@phoca.cz",
  "gender": "Male"
}, {
  "id": 10,
  "first_name": "Em",
  "last_name": "Strevens",
  "email": "estrevens9@comsenz.com",
  "gender": "Female"
}, {
  "id": 11,
  "first_name": "Rana",
  "last_name": "Sarkar",
  "email": "rana@comsenz.com",
  "gender": "Male"
}]