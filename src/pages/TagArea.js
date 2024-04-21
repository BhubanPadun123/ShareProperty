import React from "react";
import PropTypes from "prop-types"
import { serviceList } from "../utils/data"
import Room from "./serviceComponents/Room/index";
import HospitalService from "./serviceComponents/HospitalService";



class TagArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metaData: this.props.metaData
        }
    }

    render() {
        console.log("metaData==>", this.state.metaData)
        if (this.state.metaData.serviceType === serviceList[0]) {
            return (
                <Room 
                  metaData={this.state.metaData}
                />
            )
        } else if(this.state.metaData.serviceType === serviceList[1]){
            return (
                <HospitalService />
            )
        } else {
            return (
                <div>
                    <h1 style={{ color: "red" }}>{this.props.metaData.serviceType}</h1>
                </div>
            )
        }
    }
}

TagArea.propTypes = {
    metaData: PropTypes.object.isRequired
}


export default TagArea