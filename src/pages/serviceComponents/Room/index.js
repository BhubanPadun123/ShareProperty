import React from "react";
import PropTypes from "prop-types"
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    StepContent,
    Paper,
    IconButton,
    Grid,
    Container,
    TextField
} from "@mui/material"
import {
    AccountBalance,
    ProductionQuantityLimits,
    CarRental
} from "@mui/icons-material"
import pic_2 from "../../../image/pic_2.avif"
import { connect } from "react-redux"
import { RoomActionControl } from "../../../Redux/actions/RoomAction";

const RoomAction = new RoomActionControl()
const metaDataPost = RoomAction.handleMetadataPost
const getMetaData = RoomAction.handleGetMetadata


class CandidateAbout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            candidateDetails: {
                Name: this.props.metaData.hasOwnProperty("candidateName") ? this.props.metaData.candidateName : "",
                email: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.email : "",
                state: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.state : "",
                pinCode: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.pinCode : "",
                district: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.district : "",
                town: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.town : "",
                landmark: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.landmark : "",
                village: this.props.metaData.hasOwnProperty("candidateDetails") ? this.props.metaData.candidateDetails.village : ""
            },
        }
    }

    onChangeText = (e, type) => {
        switch (type) {
            case "Name":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, Name: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "state":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, state: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "email":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, email: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "pinCode":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, pinCode: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "district":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, district: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "town":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, town: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "landmark":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, landmark: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            case "village":
                this.setState((prevState) => ({ candidateDetails: { ...prevState.candidateDetails, village: e } }), () => this.props.handleCandidateDataChange(this.state.candidateDetails, "candidateDetails"))
                break;
            default:
                return
                break;
        }
    }

    render() {
        return (
            <Container
                component={Paper}
                sx={{
                    padding: "8px",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "8px", backgroundImage: `url(${pic_2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#854a46',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid component={Paper} width={'max-content'} padding={2} display={"flex"} flexDirection={'column'} gap={"10px"}>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="First Name"
                            value={this.state.candidateDetails.Name}
                            onChange={(e) => { this.onChangeText(e.target.value, "Name") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Owner Email"
                            value={this.state.candidateDetails.email}
                            onChange={(e) => { this.onChangeText(e.target.value, "email") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="State"
                            value={this.state.candidateDetails.state}
                            onChange={(e) => { this.onChangeText(e.target.value, "state") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="PinCode"
                            value={this.state.candidateDetails.pinCode}
                            onChange={(e) => { this.onChangeText(e.target.value, "pinCode") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="District"
                            value={this.state.candidateDetails.district}
                            onChange={(e) => { this.onChangeText(e.target.value, "district") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Town"
                            value={this.state.candidateDetails.town}
                            onChange={(e) => { this.onChangeText(e.target.value, "town") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Landmark"
                            value={this.state.candidateDetails.landmark}
                            onChange={(e) => { this.onChangeText(e.target.value, "landmark") }}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Village with Local name"
                            value={this.state.candidateDetails.village}
                            onChange={(e) => { this.onChangeText(e.target.value, "village") }}
                        />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

class AboutProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomDetails: {
                propertType: this.props.metaData ? this.props.metaData.serviceType ? this.props.metaData.serviceType : "" : "",
                propertyDetails: "",
                otherDetails: "",
                images: [],
                services: this.props.metaData ? this.props.metaData.serviceList ? this.props.serviceList : "" : "",
                serviceDetails: "",
                otherDetails: ""
            }
        }
    }

    handleValueChange = (e, type) => {
        switch (type) {
            case "propertyType":
                this.setState((prevState) => ({ roomDetails: { ...prevState, propTypes: e } }), () => this.props.handleCandidateDataChange(this.state.roomDetails, "roomDetails"))
                break;
            case "propertyDetails":
                this.setState((prevState) => ({ roomDetails: { ...prevState, propertyDetails: e } }), () => this.props.handleCandidateDataChange(this.state.roomDetails, "roomDetails"))
                break;
            case "otherDetails":
                this.setState((prevState) => ({ roomDetails: { ...prevState, otherDetails: e } }), () => this.props.handleCandidateDataChange(this.state.roomDetails, "roomDetails"))
                break;
            case "service":
                this.setState((prevState) => ({ roomDetails: { ...prevState, services: e } }), () => this.props.handleCandidateDataChange(this.state.roomDetails, "roomDetails"))
                break;
            case "serviceDetails":
                this.setState((prevState) => ({ roomDetails: { ...prevState, serviceDetails: e } }), () => this.props.handleCandidateDataChange(this.state.roomDetails, "roomDetails"))
                break;
            // case "otherDetails":
            //     this.setState((prevState) => ({ roomDetails: { ...prevState, otherDetails: e } }), () => this.props.handleCandidateDataChange(this.state.roomDetails, "roomDetails"))
            //     break;
            default:
                return
        }
    }

    render() {
        return (
            <Container component={Paper}
                sx={{
                    padding: "8px",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "8px", backgroundImage: `url(${pic_2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#854a46',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid component={Paper} width={'max-content'} padding={2} display={"flex"} flexDirection={'column'} gap={"10px"}>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Property Type"
                            value={this.state.roomDetails.propertType}
                            onChange={(e) => this.handleValueChange(e.target.value, "propertyType")}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Service"
                            value={this.state.roomDetails.serviceDetails}
                            onChange={(e) => this.handleValueChange(e.target.value,"serviceDetails")}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Property Details"
                            value={this.state.roomDetails.propertyDetails}
                            onChange={(e)=> this.handleValueChange(e.target.value,"propertyDetails")}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Other Details"
                            value={this.state.roomDetails.otherDetails}
                            onChange={(e)=> this.handleValueChange(e.target.value,"otherDetails")}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Image"
                        />
                    </Grid>
                </Grid >
            </Container >
        )
    }
}

class AboutRent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            charges: {
                amountChargeType:"",
                amount:""
            }
        }
    }

    handleValueChange=(e,type)=>{
        switch(type){
            case "chargesTypes":
                this.setState((prevState)=> ({charges:{...prevState,amountChargeType:e}}),()=> {this.props.handleCandidateDataChange(this.state.charges,"charges")})
                break;
            case "amount":
                this.setState((prevState)=> ({charges:{...prevState,amount:e}}),()=> { this.props.handleCandidateDataChange(this.state.charges,"charges")})
                break;
            default:
                return
        }
    }
    render(){
        return (
            <Container component={Paper}
                sx={{
                    padding: "8px",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "8px", backgroundImage: `url(${pic_2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#854a46',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid component={Paper} width={'max-content'} padding={2} display={"flex"} flexDirection={'column'} gap={"10px"}>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Type of search amount"
                            value={this.state.charges.amountChargeType}
                            onChange={(e)=> this.handleValueChange(e.target.value,"chargesTypes")}
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Amount/Service"
                            value={this.state.charges.amount}
                            onChange={(e)=> this.handleValueChange(e.target.value,"amount")}
                        />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const steps = [
    {
        name: "about",
        label: 'About Your Self',
        description: CandidateAbout,
    },
    {
        name: "property",
        label: 'About Property Details',
        description: AboutProperty,
    },
    {
        name: "rent",
        label: 'About Rent Details',
        description: AboutRent,
    },
];
class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            skepped: new Set(),
            metaData: props.metaData,
            candidateDetails: {
                Name: "",
                email: "",
                state: "",
                pinCode: "",
                district: "",
                town: "",
                landmark: "",
                village: ""
            },
            propertyDetails: {
                propertyType: "",
                service: "",
                propertyDetails: "",
                otherDetails: ""
            },
            propertyImage: []
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidMount() {
        const candidateName = localStorage.getItem("candidateName")

        if (candidateName) {
            this.props.getMetaData({ email: candidateName })
        }
    }

    handleSelectIcons = (name) => {
        let iconNode = null
        switch (name) {
            case "about": iconNode = (
                <IconButton sx={{
                    background: 'white'
                }}>
                    <AccountBalance color="white" />
                </IconButton>
            )
                break;
            case "property": iconNode = (
                <IconButton sx={{
                    background: 'white'
                }}>
                    <ProductionQuantityLimits color="white" />
                </IconButton>
            )
                break;
            case "rent": iconNode = (
                <IconButton sx={{
                    background: 'white'
                }}>
                    <CarRental color="white" />
                </IconButton>
            )
                break;
            default:
                return
        }

        return iconNode
    }

    handleReset = () => {
        this.setState({ activeStep: 0 })
    }

    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 })
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        }, () => {
            this.state.metaData.candidateDetails = this.state.candidateDetails
            this.state.metaData.propertyDetails = this.state.propertyDetails
            localStorage.getItem("candidateName", this.state.metaData.candidateDetails.email)
        })
    }
    handleCandidateDataChange = (data, type) => {
        if (type === "candidateDetails") {
            this.setState({ candidateDetails: data })
        }else if(type === "roomDetails"){
            this.setState({propertyDetails: data})
        }
    }

    handleSubmit=()=> {
        console.log(this.state.metaData.candidateDetails.email)

        if(this.state.metaData.candidateDetails.email){
            this.props.metaDataPost({ email: this.state.metaData.candidateDetails.email, metaData: this.state.metaData })
        }
    }

    render() {
        return (
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center" }}>
                <Stepper activeStep={this.state.activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                icon={this.handleSelectIcons(step.name)}
                                sx={{
                                    '.MuiStepLabel-label': {
                                        color: "white",
                                        fontFamily: "Lato",
                                        fontSize: "18px",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        letterSpacing: 2
                                    },
                                    '.Mui-active': {
                                        color: 'green'
                                    },
                                    '.Mui-completed': {
                                        color: "red"
                                    }
                                }}
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                {
                                    <step.description
                                        handleCandidateDataChange={this.handleCandidateDataChange}
                                        metaData={this.state.metaData}
                                    />
                                }
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={this.handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={this.handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {this.state.activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3, width: 'max-content' }} >
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button sx={{ mt: 1, mr: 1 }} variant='contained' onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Paper>
                )}

            </Box>
        )
    }
}

Room.propTypes = {
    metaData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        getMetadata: state.getMetadata.response
    }
}

export default connect(mapStateToProps, {
    metaDataPost,
    getMetaData
})(Room)


