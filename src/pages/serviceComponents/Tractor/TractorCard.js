import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import "./styles.css"
import {
    Card
} from "react-bootstrap"
import {
    IconButton,
    Tooltip
} from "@mui/material"
import {
    SkipNext,
    SkipPrevious
} from "@mui/icons-material"


function TractorCard(props) {
    const [state, setState] = React.useState({
        metaData: props.metaData,
        images: props.metaData.hasOwnProperty('images') ? props.metaData.images : []
    })

    console.log(state.metaData, "<----t")

    return (
        <div className="col-md-12 container-dev">
            <Card className="card">
                <Card.Header>
                    <Tooltip title="Back" arrow placement='bottom'>
                        <IconButton>
                            <SkipPrevious sx={{ color: "red" }} />
                        </IconButton>
                    </Tooltip>
                    <Card.Img className="img" src={state.images.length > 0 && state.images[0].src} />
                    <Tooltip title="Next" placement='bottom' arrow>
                        <IconButton>
                            <SkipNext sx={{ color: 'red' }} />
                        </IconButton>
                    </Tooltip>
                </Card.Header>
            </Card>
        </div>
    )
}

TractorCard.propTypes = {

}

const mapStateToProps = state => {


    return {
        state
    }
}

export default connect(mapStateToProps, {

})(TractorCard)

