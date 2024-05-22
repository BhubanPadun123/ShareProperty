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
    const [state, setState] = React.useState({
        metaData: props.metaData.metaData
    })

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
                    <div className="room-info" style={{width:"100%",padding:"4px"}}>
                        <div className="rows" style={{minWidth:"50%"}}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textTransform: 'capitalize',
                                fontFamily: 'Lato',
                                fontStyle: 'normal'
                            }}>
                                <h3 style={{ borderBottom: "2px solid white", color: 'yellowgreen' }}>
                                    Address Details
                                </h3>
                                <span style={{
                                    width:"100%",
                                    overflowWrap:'break-word'
                                }}>
                                    {
                                        state.metaData.hasOwnProperty('address') &&
                                        Object.entries(state.metaData.address).map((item, index) => (
                                            <>
                                                {
                                                     `${item[1]}`
                                                } , 
                                            </>
                                        ))
                                    }
                                </span>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textTransform: 'capitalize',
                                fontFamily: 'Lato',
                                fontStyle: 'normal'
                            }}>
                                <h3 style={{ borderBottom: "2px solid white", color: 'yellowgreen' }}>
                                    Aminities of Room
                                </h3>
                                <span style={{
                                    display:'grid',
                                    gridTemplateColumns:'auto auto',
                                    gap:"4px"
                                }}>
                                    {
                                        state.metaData.hasOwnProperty('propertyDetails') && Array.isArray(state.metaData.propertyDetails.roomAminities) && state.metaData.propertyDetails.roomAminities.length > 0 &&
                                        state.metaData.propertyDetails.roomAminities.map((item, index) => (
                                            <li key={index} style={{ width: "100%", textAlign: 'start', padding: '2px' }}>
                                                {item},
                                            </li>
                                        ))
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="rows" style={{minWidth:"50%"}}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textTransform: 'capitalize',
                                fontFamily: 'Lato',
                                fontStyle: 'normal'
                            }}>
                                <h3 style={{ borderBottom: "2px solid white", color: 'yellowgreen' }}>
                                    House Details
                                </h3>
                                {
                                    state.metaData.hasOwnProperty('propertyDetails') && (
                                        <span style={{
                                            width: "100%",
                                            overflowWrap: 'break-word'
                                        }}>
                                            {
                                                `${state.metaData.propertyDetails.roomDetail.houseNo},Number of rooms available: ${state.metaData.propertyDetails.roomDetail.numberOfRoom}`
                                            }
                                        </span>
                                    )
                                }

                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textTransform: 'capitalize',
                                fontFamily: 'Lato',
                                fontStyle: 'normal'
                            }}>
                                <h3 style={{ borderBottom: "2px solid white", color: 'yellowgreen' }}>
                                    Rent for
                                </h3>
                                <span >
                                    {
                                        state.metaData.hasOwnProperty('serviceDetails') && Array.isArray(state.metaData.serviceDetails) && state.metaData.serviceDetails.map((item, index) => (
                                            <li style={{ width: "100%", textAlign: 'start', padding: "1px" }}>
                                                {
                                                    item
                                                },
                                            </li>
                                        ))
                                    }
                                </span>
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