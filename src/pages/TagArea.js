import React from "react";
import PropTypes from "prop-types"
import { serviceList } from "../utils/data"
import Room from "./serviceComponents/Room/index";
import HospitalService from "./serviceComponents/HospitalService";
import Labour from "./serviceComponents/Labour";
import Tractor from "./serviceComponents/Tractor/index"
import News from "./serviceComponents/News";



class TagArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metaData: this.props.metaData
        }
    }

    render() {
        if (this.state.metaData.serviceType === serviceList[0]) {
            return (
                <Room 
                  metaData={this.state.metaData}
                />
            )
        } else if(this.state.metaData.serviceType === serviceList[1]){
            return (
                <HospitalService
                  metaData={this.state.metaData}
                />
            )
        }else if(this.state.metaData.serviceType === serviceList[3]){
            return(
                <Labour 
                   metaData={this.state.metaData}
                />
            )
        } else if(this.state.metaData.serviceType === serviceList[2]){
            return(
                <Tractor 
                  metaData={this.state.metaData}
                />
            )
        }else if(this.state.metaData.serviceType === "News"){
            return(
                <News 
                  metaData={this.state.metaData}
                />
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