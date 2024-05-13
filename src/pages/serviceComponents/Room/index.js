import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
    Container,
    Card,
    Form,
    Button
} from "react-bootstrap"
import { images } from "../../../utils/data"
import {
    Select,
    MenuItem
} from "@mui/material"
import { RoomActionControl } from "../../../Redux/actions/RoomAction";
import { SetGlobalNotification } from "../../../Redux/actions/NotificationAction";
import {DNALoader} from "../../../Helper/Loader"

const HandlePostMetaData = new RoomActionControl().handleMetadataPost



function Room(props) {
    const [state, setState] = React.useState({
        occupancy: [],
        roomAminities: [],
        candidateDetails: {
            fullName: "",
            email: "",
            contactNumber: "",
            profileImg: ""
        },
        roomDetail: {
            houseNo: "",
            numberOfRoom: ""
        },
        adderess: {
            state: "",
            district: "",
            pin: "",
            town: "",
            po: "",
            landmark: ""
        },
        roomSearch: {
            deposite: "",
            d_amount: "",
            rent_amount: ""
        },
        metaData : props.metaData,
        showLoader: false
    })

    React.useEffect(()=> {
        if(props.PM_status === "success"){
            setState({...state,showLoader:true})
            setTimeout(()=>{
                props.SetGlobalNotification({status:"success",message:"Successfully save Data."})
                setState({...state,showLoader:false})
            },3000)
        }
    },[
        props.PM_status
    ])
    const handleNext=async()=> {
        if(
            state.candidateDetails.contactNumber &&
            state.candidateDetails.email &&
            state.candidateDetails.fullName && 
            state.candidateDetails.profileImg
        ){
            state.metaData.candidateDetails = state.candidateDetails
        }else{
            props.SetGlobalNotification({status:"error",message:"Fill the mandatory fields!!!"})
            return
        }
        if(state.roomDetail.houseNo && state.roomDetail.numberOfRoom){
            state.metaData.roomDetail = state.roomDetail
        }else{
            props.SetGlobalNotification({status:"error",message:"Fill the mandatory fields!!!"})
            return
        }
        if(state.roomAminities.length){
            state.metaData.roomAminities = state.roomAminities
        }
        if(state.adderess.district && state.adderess.landmark && state.adderess.pin && state.adderess.po && state.adderess.state && state.adderess.town){
            state.metaData.adderess = state.adderess
        }
        if(state.roomSearch.deposite && state.roomSearch.rent_amount){
            state.metaData.roomSearch = state.roomSearch
        }else {
            props.SetGlobalNotification({status:"error",message:"Fill the mandatory fields!!!"})
            return
        }

        await props.HandlePostMetaData({email:state.candidateDetails.email,metaData:state.metaData})
    }
    console.log("Props==>",props)
    return (
        <div className="col-md-12 w-100 h-100">
            <Container>
                <Card className="" style={{ borderRadius: "12px", padding: "12px" }}>
                    <Card.Img alt="images" src={state.candidateDetails.profileImg ? state.candidateDetails.profileImg : images.address_location} style={{ height: "220px", width: "220px" }} />
                    <Card.Title className="text-info p-4">
                        Owner Mandatory Fields
                    </Card.Title>
                    <Card.Body className="p-4 d-flex flex-column gap-4 w-100 justify-content-center align-items-center">
                        <Form className="col-md-6">
                            <Form.Group className="mb-3" controlId="candidateName">
                                <Form.Label className="text-danger">Your Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={state.candidateDetails.fullName}
                                    onChange={(e) => {
                                        setState({
                                            ...state, candidateDetails: {
                                                fullName: e.target.value,
                                                email: state.candidateDetails.email,
                                                contactNumber: state.candidateDetails.contactNumber,
                                                profileImg: state.candidateDetails.profileImg
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label className="text-danger">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={state.candidateDetails.email}
                                    onChange={(e) => {
                                        setState({
                                            ...state, candidateDetails: {
                                                fullName: state.candidateDetails.fullName,
                                                email: e.target.value,
                                                contactNumber: state.candidateDetails.contactNumber,
                                                profileImg: state.candidateDetails.profileImg
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactNumber">
                                <Form.Label className="text-danger">Contact Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Contact Number"
                                    value={state.candidateDetails.contactNumber}
                                    onChange={(e) => {
                                        setState({
                                            ...state, candidateDetails: {
                                                fullName: state.candidateDetails.fullName,
                                                email: state.candidateDetails.email,
                                                contactNumber: e.target.value,
                                                profileImg: state.candidateDetails.profileImg
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="profile">
                                <Form.Label className="text-danger">Profile</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Select Profile"
                                    onChange={(e) => {
                                        setState({
                                            ...state, candidateDetails: {
                                                fullName: state.candidateDetails.fullName,
                                                email: state.candidateDetails.email,
                                                contactNumber: state.candidateDetails.contactNumber,
                                                profileImg: URL.createObjectURL(e.target.files[0])
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>
                        </Form>
                        <Form className="col-md-6">
                            <Form.Text className="text-success mb-4">
                                <h3>
                                    Room Details Mandatory
                                </h3>
                            </Form.Text>
                            <Form.Group className="mb-3 mt-4" controlId="houseNo">
                                <Form.Label className="text-danger">House Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="House Number"
                                    value={state.roomDetail.houseNo}
                                    onChange={(e) => {
                                        setState({
                                            ...state, roomDetail: {
                                                houseNo: e.target.value,
                                                numberOfRoom: state.roomDetail.numberOfRoom,
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex flex-column" controlId="occupancy">
                                <Form.Label className="text-danger">Select for occupancy</Form.Label>
                                <Select
                                    multiple
                                    value={state.occupancy}
                                    onChange={(e) => {
                                        if (e.target.value === 'none') {
                                            setState({ ...state, occupancy: [] })
                                        } else {
                                            setState({ ...state, occupancy: typeof (e.target.value) === 'string' ? e.target.value.split(',') : e.target.value })
                                        }
                                    }}
                                >
                                    <MenuItem value={'none'}>None</MenuItem>
                                    {
                                        ["Male", "Femal", "Only Sudent(Male)", "Only Student(Femal)", "Only Working (Male)", "Only Working (Femail)", "Any", "Family"].map((item, index) => (
                                            <MenuItem value={item} key={index}>{item}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="room_number">
                                <Form.Label className="text-danger">Number of Room</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Number of Room"
                                    value={state.roomDetail.numberOfRoom}
                                    onChange={(e) => {
                                        setState({
                                            ...state, roomDetail: {
                                                houseNo: state.roomDetail.houseNo,
                                                numberOfRoom: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex flex-column" controlId="profile">
                                <Form.Label className="text-danger">Property Holding in Room</Form.Label>
                                <Select
                                    multiple
                                    multiline
                                    value={state.roomAminities}
                                    onChange={(e) => {
                                        setState({ ...state, roomAminities: typeof (e.target.value) === 'string' ? e.target.value.split(',') : e.target.value })
                                    }}
                                >
                                    {
                                        ["Chair", "Bed", "Table", "Light", "Kitchen-Room", "Pan", "Bath-Room", "Water-Filter"].map((item, index) => (
                                            <MenuItem value={item} key={index}>{item}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Form.Group>
                        </Form>
                        <Form className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Text className="text-primary mb-3">
                                    <h3>
                                        Address Details (Mandatory*)
                                    </h3>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">
                                    Select State
                                </Form.Label>
                                <Form.Select
                                    value={state.adderess.state}
                                    onChange={(e) => setState({
                                        ...state, adderess: {
                                            state: e.target.value,
                                            district: state.adderess.district,
                                            pin: state.adderess.pin,
                                            town: state.adderess.town,
                                            po: state.adderess.po,
                                            landmark: state.adderess.landmark
                                        }
                                    })}
                                >
                                    {
                                        ["Assam", "Manipur", "	Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura", "Arunachal Pradesh"].map((item, index) => (
                                            <option className="p-4" value={item} key={index} style={{
                                                backgroundColor: index % 2 === 0 ? "MenuText" : "InfoText"
                                            }}>{item}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">District*</Form.Label>
                                <Form.Control type="text" value={state.adderess.district} placeholder="Enter District" onChange={(e) => setState({
                                    ...state, adderess: {
                                        state: state.adderess.state,
                                        district: e.target.value,
                                        pin: state.adderess.pin,
                                        town: state.adderess.town,
                                        po: state.adderess.po,
                                        landmark: state.adderess.landmark
                                    }
                                })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">Pin Code*</Form.Label>
                                <Form.Control value={state.adderess.pin} placeholder="PinCode" type="number" onChange={(e) => setState({
                                    ...state, adderess: {
                                        state: state.adderess.state,
                                        district: state.adderess.district,
                                        pin: e.target.value,
                                        town: state.adderess.town,
                                        po: state.adderess.po,
                                        landmark: state.adderess.landmark
                                    }
                                })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">Town Name*</Form.Label>
                                <Form.Control value={state.adderess.town} placeholder="Town Name" type="text" onChange={(e) => setState({
                                    ...state, adderess: {
                                        state: state.adderess.state,
                                        district: state.adderess.district,
                                        pin: state.adderess.pin,
                                        town: e.target.value,
                                        po: state.adderess.po,
                                        landmark: state.adderess.landmark
                                    }
                                })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">PO*</Form.Label>
                                <Form.Control value={state.adderess.po} type="text" placeholder="PO" onChange={(e) => setState({
                                    ...state, adderess: {
                                        state: state.adderess.state,
                                        district: state.adderess.district,
                                        pin: state.adderess.pin,
                                        town: state.adderess.town,
                                        po: e.target.value,
                                        landmark: state.adderess.landmark
                                    }
                                })} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">Landmark*</Form.Label>
                                <Form.Control value={state.adderess.landmark} placeholder="Landmark" type="text" onChange={(e) => setState({
                                    ...state, adderess: {
                                        state: state.adderess.state,
                                        district: state.adderess.district,
                                        pin: state.adderess.pin,
                                        town: state.adderess.town,
                                        po: state.adderess.po,
                                        landmark: e.target.value
                                    }
                                })} />
                            </Form.Group>
                        </Form>
                        <Form className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Text className="text-primary">
                                    <h3>
                                        Search Types
                                    </h3>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-danger">
                                    Search Deposite Amount
                                </Form.Label>
                                <Form.Select
                                    value={state.roomSearch.deposite}
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            roomSearch: {
                                                deposite: e.target.value,
                                                d_amount: state.roomSearch.d_amount,
                                                rent_amount: state.roomSearch.rent_amount
                                            }
                                        })
                                    }}
                                >
                                    <option value={"No"}>No</option>
                                    <option value={"Yes"}>Yes</option>
                                </Form.Select>
                                {
                                    state.roomSearch.deposite === "Yes" && (
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-denger">
                                                Deposite Amount
                                            </Form.Label>
                                            <Form.Control placeholder="Deposite Amount" type="number" value={state.roomSearch.d_amount} onChange={(e) => {
                                                setState({
                                                    ...state, roomSearch: {
                                                        deposite: state.roomSearch.deposite,
                                                        d_amount: e.target.value,
                                                        rent_amount: state.roomSearch.rent_amount
                                                    }
                                                })
                                            }} />
                                        </Form.Group>
                                    )
                                }
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-denger">
                                        Rent Amount*
                                    </Form.Label>
                                    <Form.Control placeholder="Rent Amount" type="number" value={state.roomSearch.rent_amount} onChange={(e) => {
                                        setState({
                                            ...state, roomSearch: {
                                                deposite: state.roomSearch.deposite,
                                                d_amount: state.roomSearch.d_amount,
                                                rent_amount: e.target.value
                                            }
                                        })
                                    }} />
                                </Form.Group>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Button variant="warning" className="p-2 m-2" onClick={handleNext}>
                    Next
                </Button>
            </Container>
            {
                state.showLoader && (
                    <Container style={{position:"absolute",height:"100%",width:"100%",display:"flex",justifyContent:'center',alignItems:'center'}}>
                        <DNALoader />
                    </Container>
                )
            }
        </div>
    )
}
Room.propTypes = {
    metaData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    console.log("state==>",state)
    return {
        getMetadata: state.getMetadata.response,
        postMetadataResponse: state.postMetadata.response,
        PM_status: state.postMetadata.status,
        error: state.postMetadata.error,
        userDataData: state.getMetadata.response
    }
}

export default connect(mapStateToProps, {
    HandlePostMetaData,
    SetGlobalNotification
})(Room)


