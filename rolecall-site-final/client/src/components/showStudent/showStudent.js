import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

})



export default function ShowStudent() {
    const classes = useStyles();

    const [studentsList, setStudentList ] = useState([])

    const deleteStudent= (id) => {
      axios.delete(`http://localhost:5000/students/${id}`).then( () => {
        window.location.reload(false);
      })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/students').then( (allStudents) => {
          setStudentList(allStudents.data);
        })
        
    }, [])

  return (
      <>
      <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Teacher's Name</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.teacherName}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteStudent(student._id)}>
                <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
