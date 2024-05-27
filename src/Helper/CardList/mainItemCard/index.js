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
    console.log("R type------>",location.state.data)
    if(type === "Room Rent"){
        const {
            email,
            images,
            metaData
        } = location.state.data
        return (
            <RoomView 
               
            />
        )
    }
    if(type === "Gurdant Worker"){
        return(
            <LabourView 
            />
        )
    }
    if(type === "Tractor Rent"){
        return (
            <TractorServiceView 
            />
        )
    }
    if(type==="Hospital Service"){
        return(
            <HospitalServiceView 
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