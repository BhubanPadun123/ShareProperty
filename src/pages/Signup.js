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
import { UserRegisterAction, UserLoginAction } from '../Redux/actions/UserAction';
import { HourglassLoader } from "../Helper/Loader"
import { connect } from "react-redux"
import {useNavigate} from "react-router-dom"
import { SetGlobalNotification } from '../Redux/actions/NotificationAction';

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignUp(props) {
  const naviate = useNavigate()
  const [state, setState] = React.useState({
    status: "",
    openVerification: false,
    userData: {
      email: "",
      password: ""
    },
    isCkeckRememberMe:false,
    showLoader: false
  })

  React.useState(() => {
    const fetchLocalData = async () => {
      const email = localStorage.getItem("email")
      const password = localStorage.getItem("password")

      if (email && password) {
        let userData = {
          email: email,
          password: password,
        };
        await props.UserLoginAction(userData)

        if(props.status === "success"){
          naviate("/")
        }
      }
    }
    fetchLocalData()
  }, [])
  React.useEffect(()=>{
    const fetchPostData = async()=>{
      if(props.status === "failed"){
        props.SetGlobalNotification({status:"error",message:props.message})
      }
      if(props.status === "success"){
        setState({...state,showLoader:true})
        setTimeout(()=>{
          setState({...state,showLoader: false})
          naviate("/")
        },3000)
      }
    }
    fetchPostData()
  },[props.status,props.response])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userData = {
      username: `${data.get('firstName')} ${data.get('lastName')}`,
      email: data.get('email'),
      password: data.get('password'),
      cpassword: data.get('cpassword')
    }

    await props.UserRegisterAction(userData)
    if (props.status === "success") {
      if(state.isCkeckRememberMe){
        localStorage.setItem("userEmail", data.get('email'))
        localStorage.setItem("password", data.get("password"))
      }
      setState({ ...state, status: true, openVerification: true })
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  type="text"
                  id="cpassword"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" checked={state.isCkeckRememberMe} onChange={()=> setState({...state,isCkeckRememberMe:!state.isCkeckRememberMe})} />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {
        (props.status === "started" || state.showLoader) && (
          <Container sx={{
            position: 'absolute',
            top: 0,
            zIndex: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}>
            <HourglassLoader />
          </Container>
        )
      }
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  console.log(state,"<--------- ")
  return {
    status: state.userSignup.status,
    message:state.userSignup.status === "failed" ? state.userSignup.error.response.data.info : "Successfully Login.",
    response:state.userSignup.status === "success" ? state.userSignup.response.info  : state.userSignup.response
  }
}

export default connect(mapStateToProps, {
  UserRegisterAction,
  UserLoginAction,
  SetGlobalNotification
})(SignUp)