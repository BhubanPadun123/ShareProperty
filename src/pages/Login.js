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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginSharp } from "@mui/icons-material"
import { PasswordResetAlert } from '../Helper/AlertModel';
import { UserLoginAction } from '../Redux/actions/UserAction';
import { connect } from "react-redux"
import { HourglassLoader } from "../Helper/Loader"
import { useNavigate } from "react-router-dom"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const OTPVerification=(props)=> {

    const [state,setState] = React.useState({
        otp:""
    })

    return(
        <div style={{
            padding:"10px",
            opacity:10,
            display:"flex",
            flexDirection:"column",
            gap:"20px",
            
        }}>
            <TextField 
               variant='outlined'
               placeholder='Enter OTP'
               type='number'
               onChange={(e)=> setState({...state,otp:e.target.value})}
            />
            <Button variant='contained' onClick={()=> props.handleVerify(state.otp)}>
                Submit
            </Button>
            <Button variant='contained' onClick={()=> props.onCancel()}>
                Calcel
            </Button>
        </div>
    )
}



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function Login(props) {
    const navigate = useNavigate()
    const [state, setState] = React.useState({
        resetPassword: false,
        rememberMe: false,
        openUserVerification: false
    })

    React.useEffect(() => {
        const fetchLocalData = async () => {
            const email = localStorage.getItem("userEmail")
            const password = localStorage.getItem("email")

            if (email && password) {
                const userData = {
                    email: email,
                    password: password
                }

                await props.UserLoginAction(userData)
                if (props.status === "success") {
                    if (props.loginResponse.info.verify) {
                        navigate('/')
                    } else {
                        setState({ ...state, openUserVerification: true })
                        alert("User Verification pendding")
                    }
                }
            }
        }
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let userData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        await props.UserLoginAction(userData)
        if (state.rememberMe) {
            localStorage.setItem("userEmail", data.get('email'))
            localStorage.setItem("password", data.get('password'))
        }
        if (props.status === "success") {
            if (props.loginResponse.info.verify ) {
                navigate('/')
            }
            else {
                setState({ ...state, openUserVerification: true })
                alert("User Verification pendding")
            }
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LoginSharp />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={4}>
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
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" checked={state.rememberMe} onChange={() => setState({ ...state, rememberMe: !state.rememberMe })} />}
                                    label="Remember me?"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: 'max-content' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={() => { setState({ ...state, resetPassword: !state.resetPassword }) }}>
                                    Forget Password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
                {
                    state.resetPassword && (
                        <PasswordResetAlert />
                    )
                }
            </Container>
            {
                props.status === "started" && (
                    <Container sx={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <HourglassLoader />
                    </Container>
                )
            }
            {
                state.openUserVerification && (
                    <Container sx={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:'GrayText',
                        zIndex:10,
                        opacity:0.98
                    }}>
                        <OTPVerification 
                            handleVerify = {()=>{}}
                            onCancel={()=> {setState({...state,openUserVerification:false})}}
                        />
                    </Container>
                )
            }
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    console.log("state==>", state.userLogin.response)
    return {
        status: state.userLogin.status,
        loginResponse: state.userLogin.response
    }
}

export default connect(mapStateToProps, {
    UserLoginAction
})(Login)