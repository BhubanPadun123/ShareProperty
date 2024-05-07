
import React from 'react';
import Card from 'react-bootstrap/Card';
import PhotoUploader from './PhotoUploader.js';
import { connect } from "react-redux"
import { RoomActionControl } from '../Redux/actions/RoomAction.js';
import GlobalAction from '../Redux/actions/GlobalAction.js';
import { SetGlobalNotification } from '../Redux/actions/NotificationAction.js';
import {
    Edit,
    Close
} from "@mui/icons-material"
import {
    IconButton,
    Paper,
    Tooltip,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    Typography,
    Avatar,
    Divider,
    Grid,
    TextField,
    Button
} from "@mui/material"
import { Form } from "react-bootstrap"
import updateImg from "../image/update_1.png"
import propertyUpdate from "../image/propertyUpdate.jpg"
import uploadPic from "../image/uploadPic.jpg"
import {DNALoader} from "./Loader.js"

const updateRoom = new RoomActionControl().handleMetadataPost
const uploadImage = new GlobalAction().HandleImageUpload
const deleteImage = new GlobalAction().HandleImageDelete
const getUserMetaData = new RoomActionControl().handleGetMetadata

function RoomUpdate(props) {
    const [state, setState] = React.useState({
        selectedData: props.selectedData,
        images: [],
        edit: "",
        profilePicUrl: "",
        metaData: props.selectedData.metaData
    })

    React.useEffect(() => {
        const fetchPostData=async()=> {
            if (props.imagesResponse) {
                if (props.imagesResponse.info) {
                    if (props.imagesResponse.info.images) {
                        Array.isArray(props.imagesResponse.info.images) && props.imagesResponse.info.images.length > 0 && setState({ ...state, images: props.imagesResponse.info.images })
                    }
                }
            }
            if(props.selectedData.email){
                await props.getUserMetaData({email:props.selectedData.email})
            }
            if(props.availableImages && Array.isArray(props.availableImages) && props.availableImages.length > 0){
                setState({...state,images:props.availableImages})
            }
            console.log("props==>",props)
        }
        fetchPostData()
    }, [])

    const handleRemoveImage=async(img)=>{
        await props.deleteImage({email:state.metaData.candidateDetails.email,image:img})

        if(props.deleteImageStatus === "success"){
            await props.getUserMetaData({email:props.selectedData.email})
            setState({...state,images: props.availableImages})
        }
    }
    
    const handleUpdate = async (Propdata) => {
        let { type } = Propdata
        console.log(type)
        let data = {
            email: "",
            metaData: ""
        }
        switch (type) {
            case "Gurdant Worker":
                data = {
                    email: state.selectedData.metaData.email,
                    metaData: state.selectedData.metaData
                }
                await props.updateRoom(data)
                if (props.status === "success") {
                    props.toogleUpdate(false)
                }
                break;
            case "Room Rent":
                data = {
                    email: state.metaData.candidateDetails.email,
                    metaData: state.metaData
                }

                await props.updateRoom(data)
                if (props.status === "success") {
                    props.toogleUpdate(false)
                }
                break;
            default:
                return
        }
    }


    return (
        <div className='col-md-12 w-100 d-flex flex-column justify-content-center align-items-center'>
            {
                Object.entries(state.metaData).length > 0 &&
                state.metaData.serviceType === "Room Rent" && (
                    <div className='col-md-12 col-sm-12 d-flex flex-column justify-content-end align-items-center gap-2'>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label>Room Owner Detals</Form.Label>
                            </Form.Group>
                        </Form>
                        <Divider />
                        <Card className='col-md-6 col-sm-12'>
                            <Card.Img alt='Image' src={updateImg} variant='top' />
                            <Card.Header>
                                <Card.Text>Room Owner Details</Card.Text>
                                <Card.Text>
                                    <Tooltip title="Edit" placement='bottom' arrow>
                                        <IconButton>
                                            <Edit sx={{ color: "red" }} />
                                        </IconButton>
                                    </Tooltip>
                                </Card.Text>
                            </Card.Header>
                            <Divider sx={{ color: "red", border: "2px solid red" }} />
                            <Card.Body>
                                <Form className='d-flex flex-column gap-4'>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>Owner Name</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Owner Name'
                                            value={state.metaData.candidateDetails.Name}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, Name: e.target.value } } })}
                                        />
                                    </Form.Group>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>Owner Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Owner Name'
                                            value={state.metaData.candidateDetails.email}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, email: e.target.value } } })}
                                        />
                                    </Form.Group>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>State</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Owner Name'
                                            value={state.metaData.candidateDetails.state}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, state: e.target.value } } })}
                                        />
                                    </Form.Group>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>District</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='District'
                                            value={state.metaData.candidateDetails.district}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, district: e.target.value } } })}
                                        />
                                    </Form.Group>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>Town</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Town'
                                            value={state.metaData.candidateDetails.town}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, town: e.target.value } } })}
                                        />
                                    </Form.Group>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>PinCode</Form.Label>
                                        <Form.Control
                                            type='number'
                                            placeholder='PinCode'
                                            value={state.metaData.candidateDetails.pinCode}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, pinCode: e.target.value } } })}
                                        />
                                    </Form.Group>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>Village/Landmark</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Village/Landark'
                                            value={`${state.metaData.candidateDetails.landmark},${state.metaData.candidateDetails.village}`}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, village: e.target.value } } })}
                                        />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className='col-md-6 col-sm-12'>
                            <Card.Img alt='Image' src={propertyUpdate} variant='top' />
                            <Card.Header>
                                <Card.Text>Room Details</Card.Text>
                                <Card.Text>
                                    <Tooltip title="Edit" placement='bottom' arrow>
                                        <IconButton>
                                            <Edit sx={{ color: "red" }} />
                                        </IconButton>
                                    </Tooltip>
                                </Card.Text>
                            </Card.Header>
                            <Divider sx={{ color: "red", border: "2px solid red" }} />
                            <Card.Body>
                                <Form className='d-flex flex-column gap-4'>
                                    <Form.Group className='d-md-flex justify-content-center gap-2'>
                                        <Form.Label className='w-50 d-flex justify-content-center align-item-center h-100'>Owner Name</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Owner Name'
                                            value={state.metaData.candidateDetails.Name}
                                            onChange={(e) => setState({ ...state, metaData: { ...state.metaData, candidateDetails: { ...state.metaData.candidateDetails, Name: e.target.value } } })}
                                        />
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className='col-md-6 col-sm-12'>
                            <Card.Img alt='Image' src={uploadPic} variant='top' />
                            <Card.Header>
                                <Card.Title>Upload Room Images</Card.Title>
                            </Card.Header>
                            <Divider sx={{ color: "red", border: "2px solid red" }} />
                            <Card.Body>
                                <PhotoUploader
                                    title={state.images.length > 5 ? "Delete Image to upload new" : "Select Room Images"}
                                    photoAccept={"Only accept(jpg/png) formate"}
                                    allowClick={state.images.length > 5 ? false : true}
                                    allowDrag={false}
                                    multiple={false}
                                    onSelect={async (e) => {
                                        if (Array.isArray(e) && e.length > 0) {
                                            e.map((item) => {
                                                let maxFileSizeKB = 30
                                                if (item.size > maxFileSizeKB * 1024) {
                                                    props.SetGlobalNotification({ status: "error", message: "File size should be less than 30kb" })
                                                    return
                                                } else {
                                                    let reader = new FileReader()
                                                    reader.readAsDataURL(item)
                                                    reader.onload = async () => {
                                                        await props.uploadImage({ email: state.metaData.candidateDetails.email, image: reader.result })

                                                        if (props.imagesResponse) {
                                                            if (props.imagesResponse.info) {
                                                                if (props.imagesResponse.info.images) {
                                                                    Array.isArray(props.imagesResponse.info.images) && props.imagesResponse.info.images.length > 0 && setState({ ...state, images: props.imagesResponse.info.images })
                                                                }
                                                            }
                                                        }
                                                    }
                                                    reader.onerror = async () => {
                                                        await props.SetGlobalNotification({ status: "info", message: "Error while upload Image" })
                                                    }
                                                }
                                            })
                                        }
                                    }}
                                />
                            </Card.Body>
                            <Card.Footer className='d-flex gap-4 overflow-auto'>
                                {
                                    state.images.length > 0 && state.images.map((item, index) => (
                                        <Card.Subtitle className='w-50 border border-warning'>
                                            <Card.Link>
                                                <Tooltip title="Delete" placement='bottom' arrow sx={{padding:"0px"}}>
                                                    <IconButton onClick={()=> handleRemoveImage(item.src)}>
                                                        <Close sx={{color:"red"}} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Card.Link>
                                            <Card.Img alt='Images' key={index} src={item.src} />
                                        </Card.Subtitle>
                                    ))
                                }
                            </Card.Footer>
                        </Card>
                    </div>
                )
            }
            {
                Object.entries(state.metaData).length > 0 &&
                state.metaData.serviceType === "Gurdant Worker" && (
                    <div className='col-md-12'>
                        <Grid item sx={12} sm={12} display={'flex'} flexDirection={"column"} justifyContent={"center"} alignItems={'center'} >
                            {
                                state.edit && !state.profilePicUrl ? (
                                    <input type='file' accept="image/png, image/jpeg" onChange={(e) => {
                                        console.log(e.target.files[0])
                                        let profilePic = e.target.files[0]
                                        state.selectedData.metaData.profilePic = profilePic
                                        setState({ ...state, profilePicUrl: URL.createObjectURL(profilePic) })
                                    }} />
                                ) : (
                                    <IconButton sx={{ width: 'max-content' }} onClick={() => { setState({ ...state, profilePicUrl: "" }) }}>
                                        <Avatar alt='Profile' src={state.selectedData.metaData.profilePic ? URL.createObjectURL(state.selectedData.metaData.profilePic) : state.profilePicUrl} />
                                    </IconButton>
                                )
                            }
                            <Tooltip title={"Edit"} placement='bottom' arrow>
                                <IconButton sx={{ width: 'max-content' }} onClick={() => setState({ ...state, edit: !state.edit })} >
                                    <Edit sx={{ color: "red" }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Divider />
                        <TableContainer component={Paper} sx={{ display: "flex", justifyContent: "center", padding: "10px" }} >
                            <Table sx={{ width: "max-content", border: "2px solid green" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: 'normal',
                                                fontWeight: 500
                                            }}>
                                                Info
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                            }}>
                                                Details
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                Name
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.candidateName}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, candidateName: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.candidateName}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                Email
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.email}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.email}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                Contact
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.employeeContactNumber}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, employeeContactNumber: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.employeeContactNumber}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                District
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.district}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, district: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.district}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                State
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.state}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, state: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.state}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                PinCode
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.pinCode}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, pinCode: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.pinCode}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                Town
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.town}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, town: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.town}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography sx={{
                                                fontFamily: "Lato",
                                                fontStyle: "italic",
                                                fontWeight: 500
                                            }}>
                                                Village
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                state.edit ? (
                                                    <TextField
                                                        value={state.selectedData.metaData.village}
                                                        onChange={(e) => {
                                                            let newValue = e.target.value
                                                            setState({ ...state, selectedData: { ...state.selectedData, metaData: { ...state.selectedData.metaData, village: newValue } } })
                                                        }}
                                                    />
                                                ) : (
                                                    <Typography sx={{
                                                        fontFamily: "Lato",
                                                        fontStyle: "italic",
                                                        fontWeight: 500
                                                    }}>
                                                        {state.selectedData.metaData.village}
                                                    </Typography>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )
            }
            <Button variant='contained' sx={{ margin: "10px" }} onClick={() => handleUpdate({ type: state.metaData.serviceType })}>
                Update
            </Button>
            {
                (props.deleteImageStatus === "started" || props.imageUploadStatus === "started") && (
                    <div className='col-md-12 col-sm-12' style={{
                        position:"absolute",
                        top:0,
                        height:"100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'GrayText',
                        opacity:0.8
                    }}>
                        <DNALoader />
                    </div>
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        updateMetaDataResponse: state.postMetadata.response,
        status: state.postMetadata.status ,
        imagesResponse: state.imageReducer.response,
        availableImages: state.getMetadata.response.info ? state.getMetadata.response.info.images : state.getMetadata.response,
        deleteImageStatus: state.imageDeleteReducer.status,
        imageUploadStatus: state.imageReducer.status
    }
}

export default connect(mapStateToProps, {
    updateRoom,
    uploadImage,
    SetGlobalNotification,
    deleteImage,
    getUserMetaData
})(RoomUpdate);