import React from "react";
import PropTypes from "prop-types"
import {
    Button,
    Collapse,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import { 
     More ,
     LocationOn,
     ExpandLess,
     ExpandMore,
     GpsFixed
} from "@mui/icons-material";


export default function TractorService(props) {
    const {
        address,
        images,
        metaData,
        ownerDetails,
        serviceDetails
    } = props


    const [state,setState] = React.useState({
        src: images && Array.isArray(images) ? images[0] : "",
        open: false,
        openLocation:false
    })
    return (
        <li style={{
            display: "flex",
            justifyContent: 'center'
        }}>
            <div href="" className="card">
                <img src={state.src.src} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src={"https://i.imgur.com/7D7I6dI.png"} alt="profile Image" />
                        <div className="card__header-text">
                            <h3 className="card__title">Jessica Parker</h3>
                            <span className="card__status">1 hour ago</span>
                        </div>
                        <div className="card__header-button">
                           <IconButton onClick={()=> {
                            setState({
                                ...state,
                                open: !state.open,
                                openLocation: false
                            })
                           }}>
                            <More sx={{color:"orangered"}} />
                           </IconButton>
                        </div>
                    </div>
                    <div className="card__description" style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <Collapse in={state.open} timeout={'auto'} unmountOnExit >
                            <ListItemButton onClick={()=> {
                                setState({
                                    ...state,
                                    openLocation: !state.openLocation
                                })
                            }}>
                                <ListItemIcon>
                                    <LocationOn sx={{color:'orange'}} />
                                </ListItemIcon>
                                <ListItemText primary="Location" />
                                {
                                    !state.openLocation ? <ExpandLess /> : <ExpandMore />
                                }
                            </ListItemButton>
                            <Collapse in={state.openLocation} timeout={'auto'} unmountOnExit>
                                <List component={'div'} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <GpsFixed sx={{color:"red"}} />
                                        </ListItemIcon>
                                        <ListItemText primary={address && Object.entries(address).map(item => `${item[1]} ,`)} />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </Collapse>
                        <Button variant='outlined' onClick={(e)=> {
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

TractorService.propTypes = {
    images: PropTypes.object,
    metaData: PropTypes.object,
    address: PropTypes.object,
    ownerDetails: PropTypes.object,
    serviceDetails: PropTypes.object,
    handleItemView: PropTypes.func
}