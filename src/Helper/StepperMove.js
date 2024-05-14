import React from "react";
import PropTypes from "prop-types"
import {
    Box,
    Step,
    Stepper,
    StepLabel,
    Typography,
    StepContent,
    Paper,
    IconButton,
    Container,
    Grid,
    Button
} from "@mui/material"
import pic_1 from "../image/worker_1.jpg"


class StepperMove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            skepped: new Set(),
            steps: this.props.stepsList,
            next: false
        }
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
            next: true
        })
    }
    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 })
    }
    handleReset = () => {
        this.setState({ activeStep: 0 })
    }

    render() {
        let fields_data = {}
        if(this.state.activeStep === 0){
            fields_data = this.props.candidateDetails
        }
        if(this.state.activeStep === 1){
            fields_data = this.props.serviceDetails
        }
        return (
            <Grid component={Paper} sx={12} md={6} display={'flex'} flexDirection={'column'} gap={"8px"} justifyContent={'center'} bgcolor={"#c9c253"} alignItems={"center"}>
                <Stepper activeStep={this.state.activeStep} orientation='vertical' >
                    {
                        Array.isArray(this.props.stepsList) && this.props.stepsList.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    icon={<step.label_icon />}
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
                                    {
                                        step.label
                                    }
                                </StepLabel>
                                <StepContent>
                                    {
                                        <step.description 
                                           updateValue={(e,type)=> {
                                            this.props.handleNext(e,type)
                                            this.setState({next: false})
                                           }}
                                           next={this.state.next}
                                           fields_data={fields_data}
                                        />
                                    }
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 1, mr: 1 }}
                                                onClick={this.handleNext}
                                            >
                                                {index === this.state.steps.length ? "Finish" : "Continue"}
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
                        ))
                    }
                </Stepper>
                {
                    this.state.activeStep === this.state.steps.length && (
                        <Paper square elevation={0} sx={{ p: 3, width: 'max-content' ,borderRadius:"12px"}}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button sx={{ mt: 1, mr: 1 }} variant='contained'>
                                Submit
                            </Button>
                        </Paper>
                    )
                }
            </Grid>
        )
    }
}

StepperMove.propTypes = {
    stepsList: PropTypes.array.isRequired,

}

export {
    StepperMove
}