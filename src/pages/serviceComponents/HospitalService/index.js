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

        }
    }

    render() {
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "10px"
                }}
            >
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Full Name"
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Email"
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="Contact Number"
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField
                        placeholder="DL Number"
                    />
                </Grid>
            </Container>
        )
    }
}
About.propTypes = {

}
class ServiceTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDays: []
        }
    }
    handleChange = (event) => {
        const {
            target: { value },
        } = event;
        this.setState({ selectedDays: typeof value === 'string' ? value.split(',') : value })
    }

    render() {
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "20px"
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
                    />
                </Grid>
            </Container>
        )
    }
}
ServiceTime.propTypes = {

}

class AboutVechicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVechile:""
        }
    }
    handleChange = (event) => {
        this.setState({selectedVechile:event})
    }

    render() {
        return (
            <Container component={Paper}
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "20px"
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
                    />
                </Grid>
                <Grid item sx={12} md={6}>
                    <TextField 
                       variant={'outlined'}
                       focused
                       placeholder="Vechile Number"
                    />
                </Grid>
            </Container>
        )
    }
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
                    gap: "20px"
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
        label: "Type Of charge",
        label_icon: EvStation,
        value: "name",
        description: About
    },
    {
        label: "Charge Amount",
        label_icon: Payment,
        value: "name",
        description: About
    },
    {
        label: "Agreement",
        label_icon: Handshake,
        value: "name",
        description: About
    }
]

class HospitalService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Container component={Paper}>
                <StepperMove
                    stepsList={steps}
                />
            </Container>
        )
    }
}

HospitalService.propTypes = {

}

export default HospitalService