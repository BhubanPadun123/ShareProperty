import React from "react";
import PropTypes from "prop-types"
import "./RoomCardStyles.css"
import { images } from "../../../utils/data"
import {
    SkipNext,
    SkipPrevious
} from "@mui/icons-material"
import {
    IconButton,
    Tooltip
} from "@mui/material"


function RoomItemCard(props) {

    const [state,setState] = React.useState({
        metaData: props.metaData.metaData
    })

    console.log("==>",Object.entries(state.metaData.address))

    return (
        // <div id="container" className="d-flex flex-md-column flex-sm-column flex-sx mb-3">
        <div className="card">
            <nav>
                Back to all Plants
            </nav>
            <div className="info_container">
                <div className="photo">
                    <Tooltip title="Previous">
                        <IconButton>
                            <SkipPrevious />
                        </IconButton>
                    </Tooltip>
                    <img src={images.gender} />
                    <Tooltip title="Next">
                        <IconButton>
                            <SkipNext />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="description">
                    <div className="room-info">
                        <div className="rows">
                            <div>
                                {
                                    state.metaData.hasOwnProperty('address') && 
                                    Object.entries(state.metaData.address).map((item,index)=> (
                                        <span key={index}>
                                            {
                                                `${item[0]}:${item[1]}`
                                            }
                                        </span>
                                    ))                                   
                                }                                
                            </div>
                            <div >
                                {
                                    state.metaData.hasOwnProperty('propertyDetails') && Array.isArray(state.metaData.propertyDetails.roomAminities) && state.metaData.propertyDetails.roomAminities.length > 0 && 
                                    state.metaData.propertyDetails.roomAminities.map((item,index)=> (
                                        <span key={index}>
                                            {item},
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="rows">
                            <div>
                                {
                                    state.metaData.hasOwnProperty('propertyDetails') &&
                                    Object.entries(state.metaData.propertyDetails).map((item,index)=> (
                                        <span>
                                            {
                                                `${item[0]}: ${item[0]},`
                                            }
                                        </span>
                                    ))                                                                    
                                }
                                
                            </div>
                            <div>
                                {
                                    state.metaData.hasOwnProperty('serviceDetails') && Array.isArray(state.metaData.serviceDetails) && state.metaData.serviceDetails.map((item,index) => (
                                        <span key={index}>{item},</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="room-info">
                        <div className="btn-group">
                            <button>Add to Cart</button>
                            <button>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

RoomItemCard.propTypes = {
    handleItemView: PropTypes.func,
    metaData: PropTypes.object

}

export default RoomItemCard