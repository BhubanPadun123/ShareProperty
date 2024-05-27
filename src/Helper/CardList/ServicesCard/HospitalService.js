import React from "react";
import PropTypes from "prop-types"
import {
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight ,
    ExpandLess,
    ExpandMore,
    PlaceSharp,
    LocationSearching,
    LocalTaxi,
    DateRange,
    EventRepeatOutlined
} from "@mui/icons-material"
import {
    IconButton,
    Button,
    List,
    Collapse,
    ListItemButton,
    ListSubheader,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import {images} from "../../../utils/data"



export default function HospitalService(props) {
    const {
        ownerDetails,
        handleImgForwardBackward,
        metaData,
        serviceDetails,
    } = props

    const [state,setState] = React.useState({
        src:"",
        openLocation:false,
        openServiceDay:false
    })


    return (
        <li style={{
            display: "flex",
            justifyContent: 'center'
        }}>
            <div href="" className="card">
                <img src={images.service_list} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src={ownerDetails && ownerDetails.profileImg ? ownerDetails.profileImg : "https://i.imgur.com/7D7I6dI.png"} alt="profile Image" />
                        <div className="card__header-text">
                            <h3 className="card__title">Jessica Parker</h3>
                            <span className="card__status">1 hour ago</span>
                        </div>
                        <div className="card__header-button">
                            <IconButton>
                                <LocalTaxi sx={{color:'yellowgreen'}} />
                            </IconButton>
                        </div>
                    </div>
                    <div className="card__description" style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <List
                           sx={{ width: '100%' }}
                           component="nav"
                           subheader={
                            <ListSubheader component={'div'}>
                                Service Details
                            </ListSubheader>
                           }
                        >
                            <ListItemButton onClick={()=> setState({...state,openLocation:!state.openLocation,openServiceDay:false})}>
                                <ListItemIcon>
                                    <PlaceSharp sx={{color:"purple"}} />
                                </ListItemIcon>
                                <ListItemText primary="Location" />
                                {!state.openLocation ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={state.openLocation} timeout={'auto'} unmountOnExit>
                                <List component={'div'} disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <LocationSearching sx={{color:"red"}} />
                                        </ListItemIcon>
                                        <ListItemText primary={serviceDetails && serviceDetails.serviceList && Array.isArray(serviceDetails.serviceList) && serviceDetails.serviceList.length > 0 && serviceDetails.serviceList.map(item => `${item} ,`)} />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton onClick={()=>{
                                setState({
                                    ...state,
                                    openLocation:false,
                                    openServiceDay: !state.openServiceDay
                                })
                            }}>
                                <ListItemIcon>
                                    <DateRange sx={{color:"orange"}} />
                                </ListItemIcon>
                                <ListItemText primary="Service days" />
                                {!state.openServiceDay ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={state.openServiceDay} timeout={'auto'} unmountOnExit>
                                <List component={'div'} disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <EventRepeatOutlined sx={{color:"red"}} />
                                        </ListItemIcon>
                                        <ListItemText primary={serviceDetails && serviceDetails.serviceDays && serviceDetails.serviceDays.serviceDays && Array.isArray(serviceDetails.serviceDays.serviceDays) && serviceDetails.serviceDays.serviceDays && serviceDetails.serviceDays.serviceDays.map(item => `${item} ,`)} />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <Button variant='outlined' onClick={()=> {
                            props.handleItemView(props.metaData)
                        }}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    )
}

HospitalService.propTypes = {
    metaData: PropTypes.object,
    images: PropTypes.object,
    address: PropTypes.object,
    ownerDetails: PropTypes.object,
    propertyDetails: PropTypes.object,
    serviceDetails: PropTypes.object,
    handleItemView:PropTypes.func

}