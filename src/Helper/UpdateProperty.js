import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
    Grid,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Paper,
    Typography
} from "@mui/material"
import {
    Search
} from "@mui/icons-material"
import GlobalAction from "../Redux/actions/GlobalAction.js";
import ErrorPage from "../pages/ErrorPage.js";
import RoomUpdate from "./RoomUpdateAlert.js";
import {DNALoader} from "./Loader.js"


const getAllList = new GlobalAction().HandleGetAllService




function UpdateProperty(props) {

    const [state, setState] = React.useState({
        dataList: props.dataList,
        status: props.status,
        searchEmail: "",
        isUpdate: false,
        selectedData: {}
    })

    React.useEffect(() => {
        const fetchAllDataList =  () => {
             props.getAllList()
        }
        fetchAllDataList()
    }, [])

    const handleSearch = (e) => {
        const searchValue = Array.isArray(state.dataList) && state.dataList.length > 0 && state.dataList.filter(item => {
            return item.email.toLowerCase().includes(e.toLowerCase())
        })
        if (searchValue.length > 0) {
            setState({ ...state, dataList: searchValue, searchEmail: e })
        } else {
            setState({ ...state, dataList: props.dataList, searchEmail: e })
        }
        if (state.searchEmail.length < 2) {
            setState({ ...state, dataList: props.dataList, searchEmail: e })
        }
    }

    const handleSelect = (data) => {
        setState({ ...state, isUpdate: !state.isUpdate, selectedData: data })
    }

    if (props.state === "started") {
        return (
            <Paper sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
                <DNALoader />
            </Paper>
        )
    }
    if (props.status === "failed") {
        return (
            <Paper>
                <ErrorPage />
            </Paper>
        )
    }
    if (props.status === "success") {
        return (
            <div className="col-md-12 p-4">
                {
                    !state.isUpdate && (
                        <React.Fragment>
                            <Grid sx={12} md={12}>
                                <TextField
                                    placeholder="Enter Candidate email here..."
                                    fullWidth
                                    variant='outlined'
                                    label="Enter Candidate email here..."
                                    focused
                                    value={state.searchEmail}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IconButton>
                                                    <Search />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <Button variant='contained'>
                                                    Search..
                                                </Button>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography sx={{
                                                    fontFamily: "Lato",
                                                    fontWeight: 400,
                                                    fontStyle: 'italic'
                                                }}>
                                                    SL
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography sx={{
                                                    fontFamily: "Lato",
                                                    fontWeight: 400,
                                                    fontStyle: 'italic'
                                                }}>
                                                    Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography sx={{
                                                    fontFamily: "Lato",
                                                    fontWeight: 400,
                                                    fontStyle: 'italic'
                                                }}>
                                                    Email
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography sx={{
                                                    fontFamily: "Lato",
                                                    fontWeight: 400,
                                                    fontStyle: 'italic'
                                                }}>
                                                    Service
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography sx={{
                                                    fontFamily: "Lato",
                                                    fontWeight: 400,
                                                    fontStyle: 'italic'
                                                }}>
                                                    Action
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            Array.isArray(state.dataList) && state.dataList.length > 0 &&
                                            state.dataList.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <Typography sx={{
                                                            fontFamily: "Lato",
                                                            fontWeight: 400,
                                                            fontStyle: 'italic'
                                                        }}>
                                                            {
                                                                index
                                                            }
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography sx={{
                                                            fontFamily: "Lato",
                                                            fontWeight: 400,
                                                            fontStyle: 'italic'
                                                        }}>
                                                            {
                                                                item.metaData.candidateName
                                                            }
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography sx={{
                                                            fontFamily: "Lato",
                                                            fontWeight: 400,
                                                            fontStyle: 'italic'
                                                        }}>
                                                            {
                                                                item.email
                                                            }
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography sx={{
                                                            fontFamily: "Lato",
                                                            fontWeight: 400,
                                                            fontStyle: 'italic'
                                                        }}>
                                                            {
                                                                item.metaData.serviceType
                                                            }
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant='contained' onClick={() => handleSelect(item)}>
                                                            Update
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </React.Fragment>
                    )
                }
                {
                    state.isUpdate && (
                        <RoomUpdate
                            selectedData={state.selectedData}
                            toogleUpdate={(e) => { setState({ ...state, isUpdate: e }) }}
                        />
                    )
                }
                {
                    state.status === "started" && (
                        <div className="col-md-12" style={{
                            position:"absolute",
                            top:0,
                            height:"100%",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:'ButtonText',
                            zIndex:50
                        }}>
                            <DNALoader />
                        </div>
                    )
                }
            </div>
        )
    }
}

UpdateProperty.propTypes = {

}

const mapStateToProps = (state) => {
    console.log("update==>",state)
    let dataList = []

    if (state.getAllService.status === "success") {
        dataList = state.getAllService.response.info
    }

    return {
        dataList: dataList,
        status: state.getAllService.status
    }
}

export default connect(mapStateToProps, {
    getAllList
})(UpdateProperty)



