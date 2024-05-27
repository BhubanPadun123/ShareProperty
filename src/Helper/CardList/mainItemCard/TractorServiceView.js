import React from "react";
import PropTypes from "prop-types"


function TractorServiceView(props){
    return(
        <div>
            TractorServiceView
        </div>
    )
}

TractorServiceView.propTypes = {
    email: PropTypes.string.isRequired,
    images: PropTypes.object,
    address: PropTypes.object,
    ownerDetails:PropTypes.object,
    propertyDetails: PropTypes.object,
    serviceDetails:PropTypes.object
}

export default TractorServiceView