import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
    Grid,
    TextField,
    InputAdornment,
    IconButton,
    Button
} from "@mui/material"
import {
    Search
} from "@mui/icons-material"
import GlobalAction from "../Redux/actions/GlobalAction.js";

const getAllList = new GlobalAction().HandleGetAllService



function UpdateProperty(props) {

    const [state,setState] = React.useState({
        dataList: props.dataList,
        status: props.status
    })

    React.useEffect(()=>{
        const fetchAllDataList=async()=>{
            await props.getAllList()
        }
        fetchAllDataList()
    },[])

    console.log(props)
    return (
        <div className="col-md-12 p-4">
            <Grid sx={12} md={12}>
                <TextField
                    placeholder="Enter Candidate email here..."
                    fullWidth
                    variant='outlined'
                    label="Enter Candidate email here..."
                    focused
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
            {
                state.status === "started" && (
                    <h1>Loading......</h1>
                )
            }
        </div>
    )
}

UpdateProperty.propTypes = {

}

const mapStateToProps = (state) => {
    let dataList =[]

    if(state.getAllService.status==="success"){
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



