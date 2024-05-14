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
    return (
        // <div id="container" className="d-flex flex-md-column flex-sm-column flex-sx mb-3">
        <div className="card">
            <nav>
                Back to all Plants
            </nav>
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
                            dfsd
                        </div>
                        <div>
                            ffdf
                        </div>
                    </div>
                    <div className="rows">
                        <div>
                            dfsd
                        </div>
                        <div>
                            ffdf
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
        // </div>
    )
}

export default RoomItemCard