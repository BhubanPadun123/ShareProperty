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
import pic_1 from "../image/pic_1.jpg"
import pic_2 from "../image/pic_2.avif"



const steps = [
    {
        name: "about",
        label: 'About Your Self',
        description: (
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
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Last Name"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Owner Email"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="State"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="PinCode"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="District"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Town"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Landmark"
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <TextField
                            placeholder="Village with Local name"
                        />
                    </Grid>
                </Grid>
            </Container>
        ),
    },
    {
        name: "property",
        label: 'About Property Details',
        description: (
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
        ),
    },
    {
        name: "rent",
        label: 'About Rent Details',
        description: (
            <Container component={Paper}
                sx={{
                    padding: "8px",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "8px", backgroundImage: `url(${pic_2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#854a46',
                    justifyContent:'center',
                    alignItems:'center'
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
        ),
    },
];
class PostPropert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            skepped: new Set()
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
        })
    }

    render() {
        return (
            <Box sx={{ width: "80%" }}>
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
                                        color: 'red'
                                    },
                                    '.Mui-completed': {
                                        color: "red"
                                    }
                                }}
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                {step.description}
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
                    <Paper square elevation={0} sx={{ p: 3 }}>
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

PostPropert.propTypes = {

}

export default PostPropert


