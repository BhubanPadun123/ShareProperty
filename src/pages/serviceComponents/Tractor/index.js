import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
    Button
} from "@mui/material"
import { RoomActionControl } from "../../../Redux/actions/RoomAction.js"
import {
    Card
} from "react-bootstrap"
import PhotoUploader from "../../../Helper/PhotoUploader.js";
import { SetGlobalNotification } from "../../../Redux/actions/NotificationAction.js";
import GlobalAction from "../../../Redux/actions/GlobalAction.js";

const handePostMetaData = new RoomActionControl().handleMetadataPost
const uploadImage = new GlobalAction().HandleImageUpload
const deleteImage = new GlobalAction().HandleImageDelete


function Tractor(props) {

    const [state, setState] = React.useState({
        metaData: props.metaData,
        addressDetails: {},
        contactDetail: {},
        amountChargeDetail: [],
        currentAmountInput: "",
        images: []
    })

    console.log(props.metaData, "<===")

    const handleSubmit = () => {
        if (Object.entries(state.addressDetails).length > 0) {
            state.metaData.addressDetails = state.addressDetails
        } else {
            return
        }
        if (Object.entries(state.amountChargeDetail).length > 0) {
            state.metaData.amountChargeDetail = state.amountChargeDetail
        } else {
            return
        }
        if (Object.entries(state.contactDetail).length > 0) {
            state.metaData.contactDetails = state.contactDetail
        } else {
            return
        }
        state.metaData.images = state.images
        let data = {
            email: state.contactDetail.email,
            metaData: state.metaData
        }
        props.handePostMetaData(data)
    }

    return (
        <div className="col-md-12 d-flex-column justify-content-center align-items-center pb-4">
            <Paper sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "10px"
            }}>
                <Typography sx={{
                    fontSize: "20px",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: 500
                }}>
                    Candidate Name: {state.metaData.candidateName}
                </Typography>
                <Typography sx={{
                    fontSize: "30px",
                    fontWeight: 500,
                    fontFamily: 'monospace',
                    fontStyle: "normal",
                    lineHeight: 2
                }}>
                    Fill the details
                </Typography>
                <Divider sx={{ color: "red", border: "2px solid red" }} />
                <div className="d-flex flex-column p-4 justify-content-center gap-3 bg-primary bg-gradient rounded border-2">
                    <Typography>
                        Address Details.
                    </Typography>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="State"
                            variant='outlined'
                            label="State"
                            onChange={(e) => {
                                let stateValue = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: {
                                            ...prevState.addressDetails,
                                            state: stateValue
                                        },
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: prevState.contactDetail
                                    }
                                })
                            }}
                        />
                    </Grid>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="District"
                            variant='outlined'
                            label="District"
                            onChange={(e) => {
                                let districtValue = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: {
                                            ...prevState.addressDetails,
                                            district: districtValue
                                        },
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: prevState.contactDetail
                                    }
                                })
                            }}
                        />
                    </Grid>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="Town"
                            variant='outlined'
                            label="Town"
                            onChange={(e) => {
                                let town = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: {
                                            ...prevState.addressDetails,
                                            town: town
                                        },
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: prevState.contactDetail
                                    }
                                })
                            }}
                        />
                    </Grid>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="PIN-CODE"
                            variant='outlined'
                            label="PIN-CODE"
                            onChange={(e) => {
                                let pinValue = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: {
                                            ...prevState.addressDetails,
                                            pinCode: pinValue
                                        },
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: prevState.contactDetail
                                    }
                                })
                            }}
                        />
                    </Grid>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="Village"
                            variant='outlined'
                            label="Village"
                            onChange={(e) => {
                                let villageValue = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: {
                                            ...prevState.addressDetails,
                                            village: villageValue
                                        },
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: prevState.contactDetail
                                    }
                                })
                            }}
                        />
                    </Grid>
                </div>
                <div className="w-max-content d-flex flex-column p-4 justify-content-center gap-3 bg-success bg-gradient border border-2 border-danger rounded" style={{ width: "max-content" }}>
                    <Typography>
                        Contact Details
                    </Typography>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="Email"
                            variant='outlined'
                            label="Email"
                            onChange={(e) => {
                                let emailValue = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: prevState.addressDetails,
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: {
                                            ...prevState.contactDetail,
                                            email: emailValue
                                        }
                                    }
                                })
                            }}
                        />
                    </Grid>
                    <Grid md={6} sx={12}>
                        <TextField
                            placeholder="Contact Number"
                            variant='outlined'
                            label="Contact Number"
                            onChange={(e) => {
                                let contactNumber = e.target.value
                                setState((prevState) => {
                                    return {
                                        metaData: prevState.metaData,
                                        addressDetails: prevState.addressDetails,
                                        amountChargeDetail: prevState.amountChargeDetail,
                                        contactDetail: {
                                            ...prevState.contactDetail,
                                            contact: contactNumber
                                        }
                                    }
                                })
                            }}
                        />
                    </Grid>
                </div>
                <div className="w-max-content d-flex flex-column p-4 justify-content-center gap-3 bg-warning bg-gradient border border-2 border-danger rounded" style={{ width: "max-content" }}>
                    <Typography>
                        Amount Charge Details
                    </Typography>
                    {
                        Array.isArray(state.metaData.serviceList) && state.metaData.serviceList.map((item, index) => (
                            <Grid md={6} sx={12}>
                                <TextField
                                    key={index}
                                    placeholder={item}
                                    variant='outlined'
                                    label={item}
                                    onChange={(e) => {
                                        let inputValue = e.target.value
                                        if (state.currentAmountInput != item) {
                                            setState((prevState) => {
                                                return {
                                                    metaData: prevState.metaData,
                                                    addressDetails: prevState.addressDetails,
                                                    amountChargeDetail: [...prevState.amountChargeDetail, { chargeAmount: [item, inputValue] }],
                                                    contactDetail: prevState.contactDetail,
                                                    currentAmountInput: item
                                                }
                                            })
                                        } else {
                                            let updateExistingData = state.amountChargeDetail.map((i) => {
                                                console.log(i)
                                            })
                                            //console.log("===>",updateExistingData)
                                            // setState((prevState)=> {
                                            //     return {
                                            //         metaData: prevState.metaData,
                                            //         addressDetails:prevState.addressDetails,
                                            //         amountChargeDetail:[...prevState.amountChargeDetail,prevState.amountChargeDetail.],
                                            //         contactDetail: prevState.contactDetail,
                                            //         currentAmountInput: item
                                            //     }
                                            // })
                                        }
                                    }}
                                />
                            </Grid>
                        ))
                    }
                </div>
                <Card className="col-md-6 col-sm-12 col-lg-4">
                    <Card.Header>
                        <Card.Title>Upload Photo's</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <PhotoUploader
                            title={"Selecte Photo's"}
                            photoAccept={"Jpg/png photo's are accept"}
                            onSelect={(e) => {
                                if (Array.isArray(e) && e.length > 0) {
                                    let images = []
                                    let uploadCount = 0
                                    let rejectCount = 0
                                    e.map((item) => {
                                        let fileSize = 30;
                                        if (item.size > fileSize * 1024) {
                                            rejectCount++
                                        } else {
                                            let reader = new FileReader()
                                            reader.readAsDataURL(item)
                                            reader.onload = () => {
                                                images.push({ src: reader.result })
                                            }
                                            uploadCount++;
                                        }
                                    })
                                    props.SetGlobalNotification({ status: "info", message: `${uploadCount} image upload and ${rejectCount} images are rejected` })
                                    setState({ ...state, images: images })
                                }
                            }}
                            allowClick={true}
                            allowDrag={false}
                            multiple={true}
                        />
                    </Card.Body>
                    <Card.Footer className="w-100">
                        {
                            Array.isArray(state.images) && state.images.length > 0 && (
                                <Card.Link className="col-md-6 col-lg-4 d-flex flex-row gap-2 overflow-auto w-100">
                                    {
                                        state.images.map((item, index) => (
                                            <Card.Img alt={index} src={item.src} className="border border-red" />
                                        ))
                                    }
                                </Card.Link>
                            )
                        }
                    </Card.Footer>
                </Card>
                <Button variant='contained' onClick={handleSubmit}>
                    Submit
                </Button>
            </Paper>
        </div>
    )
}

Tractor.propTypes = {
    metaData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {

    return {
        state
    }
}

export default connect(mapStateToProps, {
    handePostMetaData,
    SetGlobalNotification,
    uploadImage,
    deleteImage
})(Tractor)