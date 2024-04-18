import React from "react";
import { Alert, Box, TextField } from "@mui/material";
import { Grid } from "react-loader-spinner";

export const PasswordResetAlert=(props)=>{
    const {
        position,
        onChange,
        onCancel,
        onOk
    } = props

    return(
        <Alert
        sx={{
            position:'absolute',
            top:0,
            width:"100%",
            height:"100%"
        }}>
            <Box position={'relative'}>
                <Grid item sx={12}>
                    <TextField 
                       placeholder="Enter Email"
                    />
                </Grid>
            </Box>
        </Alert>
    )
}