import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../image/logo512.png"
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { Edit } from '@mui/icons-material';



const defaultTheme = createTheme();

function UserDetales() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Bhuban </TableCell>
                        <TableCell align='center'>Padun</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center'>Email: bhubanpadun15m3@gmail.com</TableCell>
                        <TableCell align='center'>99548882804</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center'>Email: bhubanpadun15m3@gmail.com</TableCell>
                        <TableCell align='center'>99548882804</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center'>Email: bhubanpadun15m3@gmail.com</TableCell>
                        <TableCell align='center'>99548882804</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center'>Email: bhubanpadun15m3@gmail.com</TableCell>
                        <TableCell align='center'>99548882804</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center'>Email: bhubanpadun15m3@gmail.com</TableCell>
                        <TableCell align='center'>99548882804</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align='center'>Email: bhubanpadun15m3@gmail.com</TableCell>
                        <TableCell align='center'>99548882804</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: false
        }
    }

    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Box
                        sx={{
                           // marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: "8px"
                        }}
                    >
                        <Avatar src={logo} sx={{ border: "1px solid red", padding: "4px" }} />
                        <Typography component="h1" variant="h5">
                            <IconButton onClick={()=> this.setState({editProfile: !this.state.editProfile})}>
                                <Tooltip title="Edit" placement='bottom' arrow>
                                    <Edit />
                                </Tooltip>
                            </IconButton>
                        </Typography>
                        {
                            !this.state.editProfile ?
                                <UserDetales /> :
                                <Box component="form" noValidate onSubmit={() => { }} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2,width:'max-content' }}
                                    >
                                        Sign Up
                                    </Button>
                                </Box>
                        }

                    </Box>
                </Container>
            </ThemeProvider>

        )
    }
}


export default Profile