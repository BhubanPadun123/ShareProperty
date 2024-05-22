import React from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"


function HCard(props){

    // console.log(props,"<--------------")

    return(
        <div>
            HCard
        </div>
    )
}

HCard.propTypes = {

}

const mapStateToProps = state=> {


    return {
        state
    }
}

export default connect(mapStateToProps,{

})(HCard)

