import React from "react";
import PropTypes from "prop-types"
import {
    Typography,
    Grid,
    Container,
    Paper,
    TextField,
    Button,
    Avatar
} from "@mui/material";

import { connect } from "react-redux"
import { RoomActionControl } from "../../../Redux/actions/RoomAction";
import { SetGlobalNotification } from "../../../Redux/actions/NotificationAction";
import PhotoUploader from "../../../Helper/PhotoUploader";

const handleMetadataPost = new RoomActionControl().handleMetadataPost


class Labour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empliyeeData: {
                name: this.props.metaData ? this.props.metaData.candidateName ? this.props.metaData.candidateName : "" : "",
                contactNumber: "",
                email: "",
                state: "",
                district: "",
                town: "",
                pinCode: "",
                village: ""
            },
            metaData: this.props.metaData,
            profilePhoto:null
        }
    }

    handleSubmit = () => {
        if (this.checkEmployeeData(this.state.empliyeeData)){
            this.state.metaData.profilePhoto = this.state.profilePhoto ? URL.createObjectURL(this.state.profilePhoto) : null
            const data = {
                email: this.state.metaData.email,
                metaData: this.state.metaData
            }
            this.props.handleMetadataPost(data)
        }else{
            this.props.SetGlobalNotification({
                status: "warning",
                message:"All fill's are Mandatory!!, Please fill carefully."
            })
        }
    }

    checkEmployeeData = (data) => {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key] === null || data[key] === undefined || data[key] === "") {
                    return false;
                }
            }
        }
        return true
    }

    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: 'center'
            }}>
                <Paper elevation={0} sx={{
                    width: "max-content",
                    padding: "20px",
                    height: "max-content",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <Typography sx={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        lineHeight: "14px"
                    }}>
                        Employee Registration Form.
                    </Typography>
                    <Grid sx={12} md={12} display={'flex'} justifyContent={'center'}>
                        <Avatar 
                          alt="Profile Banner"
                          src={ this.state.profilePhoto && URL.createObjectURL(this.state.profilePhoto)}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="Employee Name"
                            value={this.state.empliyeeData.name}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, name: e.target.value } }), () => {
                                this.state.metaData.employeeName = this.state.empliyeeData.name
                            })}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="Contact Number"
                            value={this.state.empliyeeData.contactNumber}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, contactNumber: e.target.value } }), () => {
                                this.state.metaData.employeeContactNumber = this.state.empliyeeData.contactNumber
                            })}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="Email"
                            value={this.state.empliyeeData.email}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, email: e.target.value } }), () => {
                                this.state.metaData.email = this.state.empliyeeData.email
                            })}
                        />
                    </Grid><Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="State"
                            value={this.state.empliyeeData.state}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, state: e.target.value } }), () => {
                                this.state.metaData.state = this.state.empliyeeData.state
                            })}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="District"
                            value={this.state.empliyeeData.district}
                            onChange={(e) => {
                                this.setState((prevState) => ({ empliyeeData: { ...prevState, district: e.target.value } }), () => {
                                    this.state.metaData.district = this.state.empliyeeData.district
                                })
                            }}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="Town"
                            value={this.state.empliyeeData.town}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, town: e.target.value } }), () => {
                                this.state.metaData.town = this.state.empliyeeData.town
                            })}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="Pin Code"
                            value={this.state.empliyeeData.pinCode}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, pinCode: e.target.value } }), () => {
                                this.state.metaData.pinCode = this.state.empliyeeData.pinCode
                            })}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <TextField
                            placeholder="Village"
                            value={this.state.empliyeeData.village}
                            onChange={(e) => this.setState((prevState) => ({ empliyeeData: { ...prevState, village: e.target.value } }), () => {
                                this.state.metaData.village = this.state.empliyeeData.village
                            })}
                        />
                    </Grid>                    
                    <Grid sx={12} md={12}>
                        <PhotoUploader 
                           title={"Select Photo To show for Banner"}
                           photoAccept={"Support only jpg/png"}
                           onSelect={(e)=> {
                            this.setState({profilePhoto: e[0]})
                           }}
                           allowClick={true}
                           allowDrag={false}
                           multiple={false}
                        />
                    </Grid>
                    <Grid sx={12} md={12} lg={12}>
                        <Button variant='contained' onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

Labour.propTypes = {
    metaData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {

    return {
        state
    }
}

export default connect(mapStateToProps, {
    handleMetadataPost,
    SetGlobalNotification
})(Labour)