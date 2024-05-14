import React from "react";
import PropTypes from "prop-types"
import { StepperMove } from "../../../Helper/StepperMove";
import {
    VerifiedUser,
    AccessAlarm,
    AirportShuttle,
    Diversity1,
    EvStation,
    Payment,
    Handshake
} from "@mui/icons-material"
import {
    Container,
    Paper,
    Grid,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    ListItemText
} from "@mui/material";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateDetails:{
                fullName: this.props.fields_data.candidateName || this.props.fields_data.fullName ? this.props.fields_data.candidateName || this.props.fields_data.fullName : "",
                email: this.props.fields_data.email ? this.props.fields_data.email : "",
                contactNumber: this.props.fields_data.contactNumber ? this.props.fields_data.contactNumber : "",
                DL_Number: this.props.fields_data.DL_Number ? this.props.fields_data.DL_Number : ""
            }
        }
    }

    render() {
        if(this.props.next){
            this.props.updateValue(this.state.candidateDetails,"candidateDetails")
        }
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "10px",
                    paddingTop:4,
                    paddingBottom:4
                }}
            >
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Full Name"
                        value={this.state.candidateDetails.fullName}
                        onChange={(e)=> {
                            this.setState({candidateDetails:{
                                fullName:e.target.value,
                                email: this.state.candidateDetails.email,
                                contactNumber: this.state.candidateDetails.contactNumber,
                                DL_Number: this.state.candidateDetails.DL_Number
                            }})
                        }}
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Email"
                        value={this.state.candidateDetails.email}
                        onChange={(e)=> {
                            this.setState({candidateDetails:{
                                fullName:this.state.candidateDetails.fullName,
                                email: e.target.value,
                                contactNumber: this.state.candidateDetails.contactNumber,
                                DL_Number: this.state.candidateDetails.DL_Number
                            }})
                        }}
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Contact Number"
                        value={this.state.candidateDetails.contactNumber}
                        onChange={(e)=> {
                            this.setState({candidateDetails:{
                                fullName:this.state.candidateDetails.fullName,
                                email: this.state.candidateDetails.email,
                                contactNumber: e.target.value,
                                DL_Number: this.state.candidateDetails.DL_Number
                            }})
                        }}
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="DL Number"
                        value={this.state.candidateDetails.DL_Number}
                        onChange={(e)=> {
                            this.setState({candidateDetails:{
                                fullName:this.state.candidateDetails.fullName,
                                email: this.state.candidateDetails.email,
                                contactNumber: this.state.candidateDetails.contactNumber,
                                DL_Number: e.target.value
                            }})
                        }}
                    />
                </Grid>
            </Container>
        )
    }
}
About.propTypes = {
    updateValue: PropTypes.func,
    next: PropTypes.bool,
    fields_data: PropTypes.object
}
class ServiceTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDays: this.props.fields_data.serviceDays ? this.props.fields_data.serviceDays : [],
            time:{
                start: this.props.fields_data.time ? this.props.fields_data.time.start : "",
                end: this.props.fields_data.time ? this.props.fields_data.time.end :  ""
            }
        }
    }
    handleChange = (event) => {
        const {
            target: { value },
        } = event;
        this.setState({ selectedDays: typeof value === 'string' ? value.split(',') : value })
    }

    render() {
        if(this.props.next){
            let serviceTime = {
                serviceDays: this.state.selectedDays,
                time: this.state.time
            }
            this.props.updateValue(serviceTime,"serviceDetails")
        }
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "20px",
                    paddingTop:4,
                    paddingBottom:4
                }}
            >
                <Typography sx={{
                    fontFamily: "Lato",
                    fontSize: "24px",
                    mt: 4,
                    color: "GrayText",
                    fontWeight: 400,
                    lineHeight: "20px"
                }}>
                    Select Service Day's
                </Typography>
                <Grid item sx={12} md={6}>
                    <FormControl>
                        <InputLabel>Select Day's</InputLabel>
                        <Select
                            sx={{
                                width: "240px"
                            }}
                            multiple
                            value={this.state.selectedDays}
                            input={<OutlinedInput label="Select Day's" />}
                            renderValue={(selected) => selected.join(', ')}
                            onChange={this.handleChange}
                        >
                            {
                                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                                    <MenuItem key={index} value={day} >
                                        <Checkbox checked={this.state.selectedDays.indexOf(day) > -1} />
                                        <ListItemText primary={day} />
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        type='time'
                        variant='outlined'
                        label="Start Time"
                        focused
                        sx={{
                            width: "240px"
                        }}
                        value={this.state.time.start}
                        onChange={(e)=>{
                            this.setState((prevState)=>({
                                ...prevState,
                                time:{
                                    ...prevState.time,
                                    start: e.target.value
                                }
                            }))
                        }}
                    />
                </Grid>
                <Typography sx={{
                    fontFamily: "Lato",
                    fontSize: "24px",
                    mt: 4,
                    color: "GrayText",
                    fontWeight: 400,
                    lineHeight: "20px"
                }}>
                    To
                </Typography>
                <Grid item sx={12} md={6}>
                    <TextField
                        type='time'
                        variant='outlined'
                        label="End Time"
                        focused
                        sx={{
                            width: "240px"
                        }}
                        value={this.state.time.end}
                        onChange={(e)=>{
                            this.setState((prevState)=>({
                                ...prevState,
                                time:{
                                    ...prevState.time,
                                    end: e.target.value
                                }
                            }))
                        }}
                    />
                </Grid>
            </Container>
        )
    }
}
ServiceTime.propTypes = {
    updateValue: PropTypes.func,
    next: PropTypes.bool,
    fields_data: PropTypes.object
}

class AboutVechicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVechile:"",
            v_name:"",
            v_number:""
        }
    }
    handleChange = (event) => {
        this.setState({selectedVechile:event})
    }

    render() {
        if(this.props.next){
            let v_details = {
                v_type : this.state.selectedVechile,
                v_name: this.state.v_name,
                v_number : this.state.v_number
            }

            this.props.updateValue(v_details,"propertyDetails")
        }
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "20px",
                    paddingTop:4,
                    paddingBottom:4
                }}
            >
                <Grid item sx={12} md={6}>
                    <FormControl>
                        <InputLabel>Select Vechile</InputLabel>
                        <Select
                          variant='outlined'
                          label="Select Vechile"
                          value={this.state.selectedVechile}
                          onChange={(e)=> this.handleChange(e.target.value)}
                          sx={{width:"240px"}}
                        >
                            {
                                ["Auto Rickshaw","Car","Two-Wheeler","7-Seater"].map((item,index)=> (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Vechile Name"
                       value={this.state.v_name}
                       onChange={(e)=> {
                        this.setState({v_name: e.target.value})
                       }}
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Vechile Number"
                       value={this.state.v_number}
                       onChange={(e)=> {
                        this.setState({v_number:e.target.value})
                       }}
                    />
                </Grid>
            </Container>
        )
    }
}
AboutVechicle.propTypes = {
    updateValue: PropTypes.func,
    next: PropTypes.bool,
    fields_data: PropTypes.object
}

class VechileCapacity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleChange = (event) => {
        
    }

    render() {
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "20px",
                    paddingTop:4,
                    paddingBottom:4
                }}
            >
                <Grid item sx={12} md={6}>
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Minimum Capacity"
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Maximum Capacity"
                    />
                </Grid>
            </Container>
        )
    }
}

class ChargesType extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            chargesTypes:"",
            chargeMethod:""
        }
    }

    render(){
        return(
            <Container component={Paper} style={{
                display:"flex",
                flexDirection:"column",
                gap:"10px",
                paddingTop:4,
                paddingBottom:4
            }}>
                <Grid item sx={12} md={6} >
                    <FormControl>
                        <InputLabel>Select Type</InputLabel>
                        <Select
                          variant='outlined'
                          label="Select Type"
                          value={this.state.chargesTypes}
                          onChange={(e)=> {this.setState({chargesTypes: e.target.value})}}
                          sx={{width:"240px"}}
                        >
                            {
                                ["After","Before","Any Time"].map((item,index) => (
                                    <MenuItem key={index} value={item} >{item}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sx={12} md={6}>
                    <FormControl>
                        <InputLabel>Charge By</InputLabel>
                        <Select
                          variant='outlined'
                          label="Charge By"
                          value={this.state.chargeMethod}
                          onChange={(e)=> {this.setState({chargeMethod: e.target.value})}}
                          sx={{width:"240px"}}
                        >
                            {
                                ["By Per Tripe","By Per KM","By Per Member","Other"].map((item,index)=> (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Container>
        )
    }
}


const steps = [
    {
        label: "About Your Self",
        label_icon: VerifiedUser,
        value: "name",
        description: About
    },
    {
        label: "Service Time",
        label_icon: AccessAlarm,
        value: "name",
        description: ServiceTime
    },
    {
        label: "About Vehicle",
        label_icon: AirportShuttle,
        value: "name",
        description: AboutVechicle
    },
    {
        label: "Min-Max Capacity",
        label_icon: Diversity1,
        value: "name",
        description: VechileCapacity
    },
    {
        label: "Type Of charges",
        label_icon: EvStation,
        value: "name",
        description: ChargesType
    },
    {
        label: "Charge Amount",
        label_icon: Payment,
        value: "name",
        description: About
    },
    // {
    //     label: "Agreement",
    //     label_icon: Handshake,
    //     value: "name",
    //     description: About
    // }
]

class HospitalService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metaData:{
                address:"",
                serviceType: this.props.metaData.serviceType ? this.props.metaData.serviceType : "",
                ownerDetails:{
                    candidateName: this.props.metaData.candidateName ? this.props.metaData.candidateName : ""
                },
                serviceDetails:{
                    serviceList:this.props.metaData.serviceList ? this.props.metaData.serviceList : []
                },
                propertyDetails:""
            },
            email:this.props.metaData.email ? this.props.metaData.email : "",
            images:[]
        }
    }
    
    handleNext=(value,type)=> {
        console.log(value,type,"<===========")
        switch(type){
            case "candidateDetails":
                this.setState((prevState)=> ({
                    ...prevState,
                    metaData:{
                        ...prevState.metaData,
                        ownerDetails: value
                    }
                }))
                break;
            case "addressDetails":
                this.setState((prevState)=> ({
                    ...prevState,
                    metaData:{
                        ...prevState.metaData,
                        address: value
                    }
                }))
                break;
            case "serviceDetails":
                this.setState((prevState)=> ({
                    ...prevState,
                    metaData:{
                        ...prevState.metaData,
                        serviceDetails: value
                    }
                }))                
                break;
            case "propertyDetails":
                this.setState((prevState)=> ({
                    ...prevState,
                    metaData:{
                        ...prevState.metaData,
                        propertyDetails: value
                    }
                }))                
                break;
            case "images":                
                this.setState({images:value});
                break;
            default:
                return
        }
    }

    render() {
        
        return (
            <Container component={Paper} sx={{
                background:'#54544d',
                padding:4,
                borderRadius:"8px"
            }}>
                <StepperMove
                    stepsList={steps}
                    handleNext={this.handleNext}
                    candidateDetails={this.state.metaData.ownerDetails}
                    serviceDetails={this.state.metaData.serviceDetails}
                />
            </Container>
        )
    }
}

HospitalService.propTypes = {

}

export default HospitalService