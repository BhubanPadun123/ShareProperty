import React from "react";
import PropTypes from "prop-types"


function HospitalServiceView(props){
    return(
        <div>
            HospitalServiceView
        </div>
    )
}

HospitalServiceView.propTypes = {
    email:PropTypes.string.isRequired,
    images: PropTypes.object,
    address:PropTypes.object,
    ownerDetails:PropTypes.object,
    propertyDetails:PropTypes.object,
    serviceDetails:PropTypes.object
}

export default HospitalServiceView