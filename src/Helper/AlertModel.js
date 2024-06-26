import React, { useState } from "react";
import {
    Alert,
    Box,
    TextField as MuiTextField,
    Grid,
    Button,
    InputAdornment,
    IconButton,
    Tooltip
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    JoinInner,
    HighlightOff,
    Check
} from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom";
import { ForgetPasswordAction } from "../Redux/actions/UserAction";
import { useSelector,useDispatch } from "react-redux";


const TextField = styled(MuiTextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        paddingLeft: 0,
    },
    '& .MuiInputAdornment-root': {
        backgroundColor: theme.palette.divider,
        padding: '28px 14px',
        borderTopLeftRadius: theme.shape.borderRadius + 'px',
        borderBottomLeftRadius: theme.shape.borderRadius + 'px',
    },
}));
export const PasswordResetAlert = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        position,
        onChange,
        onCancel,
        onOk
    } = props

    const [state,setState] = useState({
        visiblePassword: false,
        matchPassword: false,
        newPassword:"",
        confirmPassword:"",
        email:""
    })

    const handleSubmit=async()=> {
        if(state.newPassword === state.confirmPassword){
            const data = {
                email: state.email,
                newPassword: state.newPassword,
                cNewPassword: state.confirmPassword
            }
            await dispatch(ForgetPasswordAction(data))
        }
    }

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: "100%",
            left: 0,
            background: "#daf5e1",
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: "10px"
        }}>
            <Grid item sx={12}>
                <TextField
                    placeholder="Email"
                    value={state.email}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <Tooltip title="Clear" placement='bottom' arrow>
                                        <HighlightOff />
                                    </Tooltip>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e)=> setState({...state,email:e.target.value})}
                />
            </Grid>
            <Grid item sx={12}>
                <TextField
                    placeholder="New Password"
                    value={state.newPassword}
                    type= {state.visiblePassword ? 'text' : 'password'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <IconButton onClick={()=> {setState({...state,visiblePassword:!state.visiblePassword})}}>
                                    <Tooltip>
                                        {state.visiblePassword ? <Visibility /> : <VisibilityOff />}
                                    </Tooltip>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e) => setState({...state,newPassword:e.target.value})}
                />
            </Grid>
            <Grid item sx={12}>
                <TextField
                    placeholder="Confirm Password"
                    value={state.confirmPassword}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton onClick={()=> {
                                    if(state.newPassword === state.confirmPassword){
                                        setState({...state,matchPassword: true})
                                    }
                                }}>
                                    <Tooltip>
                                        {state.matchPassword ? <Check color="white" /> : <JoinInner />}                                       
                                    </Tooltip>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e) => setState({...state,confirmPassword:e.target.value})}
                />
            </Grid>
            <Grid item sx={12}>
                <Button
                    variant='contained'
                    sx={{margin:2}}
                    onClick={handleSubmit}
                >
                    Reset
                </Button>
                <Button
                    variant='contained'
                    onClick={()=> {navigate('/signup')}}
                >
                    Cancel
                </Button>
            </Grid>
        </div>
    )
}