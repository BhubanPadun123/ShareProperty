import React, { Component } from "react";
import PropTypes from "prop-types"
import { serviceList, serviceListData } from "../utils/data"
import TagArea from "./TagArea";
import {
    Container,
    Paper,
    Grid,
    Button,
    TextField,
    Tab,
    Tabs,
    Typography,
    Divider,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    OutlinedInput,
    ListItemText,
    Checkbox
} from "@mui/material"


function HandleRentConfi(props) {
    const {
        label,
        label_icon,
        service_menu,
        availableService,
        handleServiceAppen,
        handleNameChange
    } = props
    const [personName, setPersonName] = React.useState(availableService);
    const [condiateName, setName] = React.useState(props.condiateName)

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        handleServiceAppen(typeof value === 'string' ? value.split(',') : value)
        setPersonName(typeof value === 'string' ? value.split(',') : value)
    };

    return (
        <Container component={Paper} sx={{ padding: "4px", display: "flex", flexDirection: 'column', gap: "10px", justifyContent: 'center', alignItems: "center" }}>
            <img src={label_icon} style={{ width: "50%", borderRadius: "20px" }} />
            <Grid item sx={12} md={6}>
                <TextField
                    placeholder="Enter Your Name"
                    value={condiateName}
                    onChange={(e) => {
                        handleNameChange(e.target.value)
                        setName(e.target.value)
                    }}
                />
            </Grid>
            <Grid item sx={12} md={6} display={"flex"} flexDirection={'column'} gap={"10px"} justifyContent={'center'} alignItems={"center"}>
                <Typography sx={{
                    fontFamily: "Lato",
                    fontWeight: 400,
                    lineHeight: "14px",
                    fontSize: "20px",
                    fontStyle: 'normal'
                }}>
                    Select Options
                </Typography>
                <FormControl>
                    <InputLabel>{`${label}  List`}</InputLabel>
                    <Select fullWidth
                        sx={{ minWidth: "240px" }}
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label={`${label} List`} />}
                        MenuProps={service_menu}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {
                            service_menu.map((item, idx) => (
                                <MenuItem value={item} key={idx}>
                                    <Checkbox checked={personName.indexOf(item) > -1} />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

        </Container>
    )
}

HandleRentConfi.propTypes = {
    label: PropTypes.string.isRequired,
    label_icon: PropTypes.string.isRequired,
    service_menu: PropTypes.object.isRequired,
    availableService: PropTypes.array,
    handleServiceAppen: PropTypes.func,
    handleNameChange: PropTypes.func,
    condiateName: PropTypes.string
}

class JunctionPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rentType: serviceList[0],
            selectedOption: null,
            availableService: [],
            condiateName: "",
            isReady: false,
            metaData:{}
        }
    }

    handleRentTypeSelect = (e, newValue) => {
        let findSelectedOption = serviceListData.find(item => item.label === newValue)
        this.setState({ rentType: newValue, selectedOption: findSelectedOption })
    }
    handleServiceAppen = (data) => {
        this.setState({ availableService: data })
    }

    onNext = () => {
        var metaData = {};
        metaData.candidateName = this.state.condiateName
        metaData.serviceList = this.state.availableService
        metaData.serviceType = this.state.rentType
        this.setState({ isReady: true,metaData:metaData })
    }

    render() {
        console.log(this.props)
        return (
            <div className="col-md-12" style={{
                width: "100%",
            }}>
                {
                    !this.state.isReady ? (
                        <Container style={{
                            display: 'flex',
                            width: "100%",
                            paddingTop: "4rem",
                            flexDirection: 'column',
                            gap: "40px",
                            paddingBottom: "40px"
                        }}>
                            <Grid item sx={4} md="auto" component={Paper}>
                                <Tabs orientation='horizontal'
                                    textColor='primary'
                                    value={this.state.rentType}
                                    onChange={this.handleRentTypeSelect}
                                    variant='fullWidth'
                                >
                                    {
                                        serviceList.map((service, index) => (
                                            <Tab value={service} label={service} key={index}
                                                sx={{
                                                    color: 'var(--PRD-Light-Mode-Grey-900, #948FA1)',
                                                    fontFamily: 'Lato',
                                                    fontSize: '14px',
                                                    fontStyle: 'normal',
                                                    lineHeight: '16px',
                                                    '&.Mui-selected': {
                                                        backgroundColor: '#F8F7FC',
                                                        color: "var(--PRD-Light-Mode-Black, #000)",
                                                        fontFamily: 'Lato',
                                                        fontSize: "14px",
                                                        fontStyle: 'normal',
                                                        fontWeight: 500,
                                                        lineHeight: '16px'
                                                    }
                                                }}
                                            />
                                        ))
                                    }
                                </Tabs>
                            </Grid>
                            <Container component={Paper} sx={{ padding: "4px", display: "flex", flexDirection: 'column', gap: "10px", paddingBottom: "20px" }}>
                                <Grid item sx={12} md={12} width={"100%"}>
                                    <Typography sx={{
                                        fontFamily: "Lato",
                                        fontStyle: 'bold',
                                        fontSize: "20px"
                                    }}>
                                        Configure your {this.state.rentType}
                                    </Typography>
                                    <Divider sx={{ color: "red" }} />
                                    {
                                        this.state.selectedOption ?
                                            <HandleRentConfi
                                                label={this.state.selectedOption.label}
                                                label_icon={this.state.selectedOption.label_icon}
                                                service_menu={this.state.selectedOption.service_menu}
                                                handleServiceAppen={this.handleServiceAppen}
                                                availableService={this.state.availableService}
                                                handleNameChange={(e) => this.setState({ condiateName: e })}
                                                condiateName={this.state.condiateName}
                                            /> :
                                            <HandleRentConfi
                                                label={serviceListData[0].label}
                                                label_icon={serviceListData[0].label_icon}
                                                service_menu={serviceListData[0].service_menu}
                                                handleServiceAppen={this.handleServiceAppen}
                                                availableService={this.state.availableService}
                                                handleNameChange={(e) => this.setState({ condiateName: e })}
                                                condiateName={this.state.condiateName}
                                            />
                                    }
                                </Grid>
                                <Grid item sx={12} md={6}>
                                    <Button variant='contained' onClick={this.onNext}>
                                        Next
                                    </Button>
                                </Grid>
                            </Container>
                        </Container>
                    ):
                    (
                        <TagArea 
                           metaData={this.state.metaData}
                        />
                    )
                }
            </div>
        )
    }
}

JunctionPoint.propTypes = {

}

export default JunctionPoint