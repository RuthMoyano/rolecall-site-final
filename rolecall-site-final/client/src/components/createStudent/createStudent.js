import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Create() {
    const classes = useStyles();

    const [student, setStudent] = useState({

        regNo: 0,
        studentName: '',
        grade: '',
        teacherName: ''
    });

    const createStudent = () => {
        axios.post ('http://localhost:5000/students', student).then( () => {
            window.location.reload(false);
        })
    }
        return (
            <>
            <h2>Create Student</h2>
                <Box
                    component="form"
                        sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                >
                <TextField id="standard-basic" label="ID Number" variant="standard" value={student.regNo} onChange={(event) => {
                setStudent({ ...student, regNo: event.target.value})
                }}/>
                <TextField id="standard-basic" label="Name" variant="standard" value={student.studentName} onChange={(event) => {
                setStudent({ ...student, studentName: event.target.value})
                }}/>
                <TextField id="standard-basic" label="Grade" variant="standard" value={student.grade} onChange={(event) => {
                setStudent({ ...student, grade: event.target.value})
                }}/>
                <TextField id="standard-basic" label="Teacher Name" variant="standard" value={student.teacherName} onChange={(event) => {
                setStudent({ ...student, teacherName: event.target.value})
                }}/>
                <Button variant="contained" color="primary" onClick={createStudent}>Create</Button>

    </Box>
    </>
    );
}
