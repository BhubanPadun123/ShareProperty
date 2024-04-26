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
            propertType: "",
            services: [],
            propertyDetails: "",
            otherDetails: "",
            images: []
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
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Service"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Property Details"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Other Details"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Image"
                        />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const AboutRent = (props) => {

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
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Amount/Service"
                    />
                </Grid>
            </Grid>
        </Container>
    )
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
        })
    }
    handleCandidateDataChange = (data, type) => {
        if (type === "candidateDetails") {
            this.setState({ candidateDetails: data })
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
                        <Button sx={{ mt: 1, mr: 1 }} variant='contained'>
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

export default Room


