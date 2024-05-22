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
import {
    Card
} from "react-bootstrap"
import PhotoUploader  from "../../../Helper/PhotoUploader.js"
import {connect} from "react-redux"
import {RoomActionControl} from "../../../Redux/actions/RoomAction"
import {DNALoader} from "../../../Helper/Loader"

const PostMetaData = new RoomActionControl().handleMetadataPost

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
            this.props.updateValue(serviceTime,"serviceDetails","time")
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
            selectedVechile: this.props.fields_data.v_type ? this.props.fields_data.v_type : "",
            v_name: this.props.fields_data.v_name ? this.props.fields_data.v_name :  "",
            v_number: this.props.fields_data.v_number ? this.props.fields_data.v_number : ""
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
            this.props.updateValue(v_details,"propertyDetails","about")
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
            max: this.props.fields_data.max ? this.props.fields_data.max : "",
            min: this.props.fields_data.min ? this.props.fields_data.min : ""
        }
    }
    handleChange = (event) => {
        
    }

    render() {
        if(this.props.next){
            let capacity = {
                max: this.state.max,
                min: this.state.min
            }
            this.props.updateValue(capacity,"propertyDetails","capacity")
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
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Minimum Capacity"
                       value={this.state.max}
                       onChange={(e)=> {
                        this.setState({max: e.target.value})
                       }}
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Maximum Capacity"
                       value={this.state.min}
                       onChange={(e)=> {
                        this.setState({min: e.target.value})
                       }}
                    />
                </Grid>
            </Container>
        )
    }
}
VechileCapacity.propTypes = {
    updateValue: PropTypes.func,
    next: PropTypes.bool,
    fields_data: PropTypes.object
}

class ChargesType extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            chargesTypes:this.props.fields_data.s_type ? this.props.fields_data.s_type : "",
            chargeMethod: this.props.fields_data.s_method ? this.props.fields_data.s_method : ""
        }
    }

    render(){
        if(this.props.next){
            let search = {
                s_type: this.state.chargesTypes,
                s_method:this.state.chargeMethod
            }

            this.props.updateValue(search,"serviceDetails","method")
        }
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

class AmountRent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount:""
        }
    }

    render() {
        if(this.props.next){
            let amount = {
                rentAmount : this.state.amount
            }
            this.props.updateValue(amount,"serviceDetails","amount")
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
                        placeholder="Ammount"
                        value={this.state.amount}
                        onChange={(e)=> {
                            this.setState({amount: e.target.value})
                        }}
                    />
                </Grid>
            </Container>
        )
    }
}
AmountRent.propTypes = {
    updateValue: PropTypes.func,
    next: PropTypes.bool,
    fields_data: PropTypes.object
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
        description: AmountRent
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
                    serviceList:this.props.metaData.serviceList ? this.props.metaData.serviceList : [],
                    serviceDays:[],
                    serviceTime:{},
                    amount:"",
                    serviceMethod:{}
                },
                propertyDetails:{
                    v_details:{},
                    capacity:""
                }
            },
            email:this.props.metaData.email ? this.props.metaData.email : "",
            showLoader:"false",
            images:[]
        }
    }
    
    handleNext=(value,type,name)=> {
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
                if(name === "time"){
                    this.setState((prevState) => ({
                        ...prevState,
                        metaData:{
                            ...prevState.metaData,
                            serviceDetails:{
                                ...prevState.metaData.serviceDetails,
                                serviceDays: value
                            }
                        }
                    }))
                }else if(name === "sType"){
                    this.setState((prevState) => ({
                        ...prevState,
                        metaData:{
                            ...prevState.metaData,
                            serviceDetails:{
                                ...prevState.metaData.serviceDetails,
                                serviceTime: value
                            }
                        }
                    }))
                }else if(name === "amount"){
                    this.setState((prevState) => ({
                        ...prevState,
                        metaData:{
                            ...prevState.metaData,
                            serviceDetails:{
                                ...prevState.metaData.serviceDetails,
                                amount: value
                            }
                        }
                    }))
                }else if(name === "method"){
                    this.setState((prevState) =>({
                        ...prevState,
                        metaData:{
                            ...prevState.metaData,
                            serviceDetails:{
                                ...prevState.metaData.serviceDetails,
                                serviceMethod:value
                            }
                        }
                    }))
                }              
                break;
            case "propertyDetails":
                if(name === "about"){
                    
                    this.setState((prevState) => ({
                        ...prevState,
                        metaData:{
                            ...prevState.metaData,
                            propertyDetails:{
                                ...prevState.metaData.propertyDetails,
                                v_details: value
                            }
                        }
                    }))
                }else if(name === "capacity"){
                    this.setState((prevState)=> ({
                        ...prevState,
                        metaData:{
                            ...prevState.metaData,
                            propertyDetails:{
                                ...prevState.metaData.propertyDetails,
                                capacity: value
                            }
                        }
                    }))
                }                               
                break;
            case "images":                
                this.setState({images:value});
                break;
            default:
                return
        }
    }

    handleSubmit=async()=> {
        let data = {
            email: this.state.metaData.ownerDetails.email,
            metaData: this.state.metaData,
            images: this.state.images
        }
        await this.props.PostMetaData(data)
    }
    

    render() {
        console.log("props list===>",this.props)
        return (
            <Container component={Paper} sx={{
                background:'#54544d',
                padding:4,
                borderRadius:"8px"
            }}>
                <Card style={{ borderRadius:"4px"}}>
                    <Card.Title>Select Photos for poster</Card.Title>
                    <Card.Body>
                        <PhotoUploader 
                           title={"Select Photos"}
                           photoAccept={"jpg/png"}
                           onSelect={(e)=> {
                            let image = []
                            if(Array.isArray(e) && e.length > 0){
                                e.map((item)=> {
                                    let src = URL.createObjectURL(item)
                                    image.push({src:src})
                                })
                            }
                            this.setState({images: this.state.images.concat(image)})            
                           }}
                           allowClick={true}
                           allowDrag={false}
                           multiple={true}
                        />
                    </Card.Body>
                    {
                        this.state.images.length > 0 && (
                            <Card.Footer style={{
                                display:'flex',
                                flexDirection:'row',
                                gap:"4px",
                                justifyContent:'center',
                                alignItems:'center',
                                overflowX:'scroll',
                                overflowY:"hidden"
                            }}>
                                {
                                    this.state.images.map((item,index)=> (
                                        <Card.Img style={{
                                            height:"100px",
                                            width:"80px",
                                            border:"1px solid green"
                                        }} src={item.src} alt="images" key={index} />
                                    ))
                                }
                            </Card.Footer>
                        )
                    }
                </Card>
                <StepperMove
                    stepsList={steps}
                    handleNext={this.handleNext}
                    candidateDetails={this.state.metaData.ownerDetails}
                    serviceDetails={this.state.metaData.serviceDetails}
                    v_details = {this.state.metaData.propertyDetails.v_details}
                    v_capacity = {this.state.metaData.propertyDetails.capacity}
                    serviceMethod = {this.state.metaData.serviceDetails.serviceMethod}
                    handleSubmit = {this.handleSubmit}
                />
            </Container>
        )
    }
}

HospitalService.propTypes = {

}

const mapStateToProps=state=> {

    console.log("state list===>",state)

    return {
        state
    }
}

export default connect(mapStateToProps,{
    PostMetaData
})(HospitalService)