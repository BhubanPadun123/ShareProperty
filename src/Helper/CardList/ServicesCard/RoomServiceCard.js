import React from "react";
import {
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight
} from "@mui/icons-material"
import {
    IconButton,
    Button
} from "@mui/material"
import PropTypes from "prop-types"


export default function RoomServiceCard(props){
    const {
        src,
        handleImgForwardBackward,
        handleItemView,
        metaData,
        serviceDetails,
        propertyDetails,
        ownerDetails,
        address
    } = props

    return (
        <li style={{
            display: "flex",
            justifyContent: 'center'
        }}>
            <div href="" className="card">
                <img src={src} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src={ownerDetails.profileImg ? ownerDetails.profileImg : "https://i.imgur.com/7D7I6dI.png"} alt="profile Image" />
                        <div className="card__header-text">
                            <h3 className="card__title">Jessica Parker</h3>
                            <span className="card__status">1 hour ago</span>
                        </div>
                        <div className="card__header-button">
                            <IconButton onClick={() => handleImgForwardBackward("backward")}>
                                <KeyboardDoubleArrowLeft />
                            </IconButton>
                            <IconButton onClick={() => handleImgForwardBackward("forward")}>
                                <KeyboardDoubleArrowRight />
                            </IconButton>
                        </div>
                    </div>
                    <div className="card__description" style={{
                        display:"flex",
                        flexDirection:"column"
                    }}>
                        <span>{propertyDetails.serviceList && Array.isArray(propertyDetails.serviceList) && propertyDetails.serviceList.length > 0 && propertyDetails.serviceList.map(item => `${item} ,`)}</span>,
                        <span>{Object.entries(address).length > 0 && Object.entries(address).map(item => `${item[1]} ,`)}</span>
                        <Button variant='outlined' className="mt-2"  onClick={() => {
                            handleItemView(metaData)
                        }}>View</Button>
                    </div>
                </div>
            </div>
        </li>
    )
}

RoomServiceCard.propTypes = {
    src:PropTypes.string,
    handleImgForwardBackward:PropTypes.func,
    handleItemView:PropTypes.func,
    metaData:PropTypes.object,
    serviceDetails:PropTypes.object,
    propertyDetails:PropTypes.object,
    ownerDetails:PropTypes.object,
    address:PropTypes.object
}