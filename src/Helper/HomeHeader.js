import React from "react";
import {
    Search,
    FilterAlt,
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight
} from "@mui/icons-material"
import {
    InputAdornment,
    TextField,
    IconButton,
    Tooltip,
    Grid,
    Container,
    Paper,
    Box,
    Typography,
    Divider
} from "@mui/material"
import pic_1 from "../image/school_1.jpg"


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: 4
            }}>
                <Grid item sx={10} md={6} p={2}>
                    <TextField
                        variant='outlined'
                        label="Search"
                        focused
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton>
                                        <Tooltip title="Search Catagory">
                                            <Search />
                                        </Tooltip>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item sx={2} sm={2} md={4}>
                    <IconButton>
                        <Tooltip title="Filter">
                            <FilterAlt />
                        </Tooltip>
                    </IconButton>
                </Grid>
            </div>
        )
    }
}

class RoomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Grid item sx={12}
                border={'2px solid #e3dc81'}
                width={'max-content'}
                borderRadius={2}
                display={'flex'}
            >
                <Box sx={{
                    display: 'flex',
                    height: '200px',
                    alignItems:'center'
                }}>
                    <span style={{padding:0,position:'relative',zIndex:20}}>
                        <IconButton sx={{
                            padding:"0px"
                        }}>
                            <KeyboardDoubleArrowLeft sx={{width:"14px"}} />
                        </IconButton>
                    </span>
                    <div 
                       style={{
                        width:"140px",                        
                        height:'100%',
                        backgroundImage:`url(${pic_1})`,
                        backgroundSize:'cover'
                       }}
                    />
                    <span style={{padding:0,position:'relative',zIndex:20}}>
                        <IconButton sx={{padding:"0px"}}>
                            <KeyboardDoubleArrowRight sx={{width:"14px"}} />
                        </IconButton>
                    </span>
                </Box>
                <Box sx={{
                    padding:"2px"
                }}>
                    <Typography>Happy Home</Typography>
                    <Divider />
                    <Typography>Rs- 2400/Month</Typography>
                    <Typography>
                        <span>Allow</span>
                        <ul>
                            <li>Boy</li>
                            <li>Working Men</li>
                        </ul>
                    </Typography>
                </Box>
            </Grid>
        )
    }
}


export {
    HomeHeader,
    RoomCard
}