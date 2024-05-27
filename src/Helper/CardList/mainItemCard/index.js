import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { images } from "../../../utils/data"
import { useLocation } from "react-router-dom"
import {useParams} from "react-router-dom"
import RoomView from "./RoomView"
import LabourView from "./LabourView"
import TractorServiceView from "./TractorServiceView"
import HospitalServiceView from "./HospitalServiceView"



function MainItemViewCard(props) {
    const location = useLocation()
    const {type} = useParams()
    const {
        email,
        images,
        metaData
    } = location.state.data

    if(type === "Room Rent"){
        return (
            <RoomView 
               email = {email}
               images = {images}
               address={metaData.address}
               ownerDetails={metaData.ownerDetails}
               propertyDetails={metaData.propertyDetails}
               serviceDetails={metaData.serviceDetails}
            />
        )
    }
    if(type === "Gurdant Worker"){
        return(
            <LabourView 
               email={email}
               images={images}
               address={metaData.address}
               ownerDetails={metaData.ownerDetails}
               serviceDetails={metaData.serviceDetails}
            />
        )
    }
    if(type === "Tractor Rent"){
        return (
            <TractorServiceView 
               email={email}
               images={images}
               address={metaData.address}
               ownerDetails={metaData.ownerDetails}
               propertyDetails={metaData.propertyDetails}
               serviceDetails={metaData.serviceDetails}
            />
        )
    }
    if(type==="Hospital Service"){
        return(
            <HospitalServiceView 
               email={email}
               images={images}
               address={metaData.address}
               ownerDetails={metaData.ownerDetails}
               propertyDetails={metaData.propertyDetails}
               serviceDetails={metaData.serviceDetails}
            />
        )
    }
    else{
        return <></>
    }
}

const mapStateToProps = (state) => {

    return {
        state
    }
}

export default connect(mapStateToProps, {

})(MainItemViewCard)