import React from "react";
import PropTypes from "prop-types"



function LabourView(props){
    return(
        <div>
            LabourView
        </div>
    )
}

LabourView.propTypes = {
    email: PropTypes.string.isRequired,
    images:PropTypes.object,
    address:PropTypes.object,
    ownerDetails:PropTypes.object,
    serviceDetails:PropTypes.object,
    
}

export default LabourView