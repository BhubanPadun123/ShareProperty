import React from "react";
import {
    Search,
    FilterAlt,
} from "@mui/icons-material"
import {
    InputAdornment,
    TextField,
    IconButton,
    Tooltip,
    Grid
} from "@mui/material"
import pic_1 from "../image/school_1.jpg"
import PropTypes from "prop-types"
import { serviceListData } from "../utils/data";
import { Button } from "react-bootstrap";
import RoomServiceCard from "./CardList/ServicesCard/RoomServiceCard";
import HospitalService from "./CardList/ServicesCard/HospitalService";
import TractorService from "./CardList/ServicesCard/TractorService";
import LabourService from "./CardList/ServicesCard/LabourService";


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: 4
            }}>
                <Grid item sx={10} md={6} p={2}>
                    <TextField
                        variant='outlined'
                        label="Search"
                        focused
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton>
                                        <Tooltip title="Search Catagory">
                                            <Search />
                                        </Tooltip>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item sx={2} sm={2} md={4}>
                    <IconButton onClick={(e) => { this.props.handleClickFilter(e) }}>
                        <Tooltip title="Filter">
                            <FilterAlt />
                        </Tooltip>
                    </IconButton>
                </Grid>
            </div>
        )
    }
}

class CardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomImgSrc: pic_1,
            imgIndex: 0,
            metaData:this.props.metaData
        }
    }

    handleImgForwardBackward = (type) => {
        if (type === "forward") {
            let index = this.state.imgIndex
            if (serviceListData.length - 1 > index) {
                index++;
                this.setState({ roomImgSrc: serviceListData[index].label_icon, imgIndex: index })
            }
            index++;
            if (index === serviceListData.length) {
                index = 0;
                this.setState({ roomImgSrc: serviceListData[index].label_icon, imgIndex: index })
            }
        } else if (type === "backward") {
            let index = this.state.imgIndex;

            if (index > 0) {
                index--;
                this.setState({ roomImgSrc: serviceListData[index].label_icon, imgIndex: index })
            }
            if (index === 0) {
                this.setState({ roomImgSrc: serviceListData[serviceListData.length - 1].label_icon, imgIndex: serviceListData.length - 1 })
            }
        }
    }

    render() {
        let images = this.props.metaData.images        
        if(this.state.metaData.metaData.serviceType === "Room Rent"){
            return(
                <RoomServiceCard 
                  src={Array.isArray(images) && images.length > 0 ? images[0].src : this.state.roomImgSrc}
                  handleImgForwardBackward={this.handleImgForwardBackward}
                  handleItemView={this.props.handleItemView}
                  metaData={this.state.metaData}
                  address={this.state.metaData.metaData.address}
                  ownerDetails={this.state.metaData.metaData.ownerDetails}
                  propertyDetails={this.state.metaData.metaData.propertyDetails}
                  serviceDetails = {this.state.metaData.metaData.serviceDetails}
                />
            )
        }
        if(this.state.metaData.metaData.serviceType === "Hospital Service"){
            return(
                <HospitalService 
                   src={Array.isArray(images) && images.length > 0 ? images[0].src : this.state.roomImgSrc}
                   metaData={this.state.metaData}
                   address={this.state.metaData.metaData.address}
                   ownerDetails={this.state.metaData.metaData.ownerDetails}
                   propertyDetails={this.state.metaData.metaData.propertyDetails}
                   serviceDetails={this.state.metaData.metaData.serviceDetails}
                   handleItemView={this.props.handleItemView}
                />
            )
        }
        if(this.state.metaData.metaData.serviceType === "Tractor Rent"){
            return(
                <TractorService 
                   images={images}
                   metaData={this.state.metaData}
                   address={this.state.metaData.metaData.address}
                   ownerDetails={this.state.metaData.metaData.ownerDetails}
                   serviceDetails={this.state.metaData.metaData.serviceDetails}
                   handleItemView={this.props.handleItemView}
                />
            )
        }
        if(this.state.metaData.metaData.serviceType === "Gurdant Worker"){
            return(
                <LabourService 
                  images={images}
                  metaData={this.state.metaData}
                  address={this.state.metaData.metaData.address}
                  candidateDtails={this.state.metaData.metaData.ownerDetails}
                  handleItemView={this.props.handleItemView}
                />
            )
        }
        else{
            return null
        }
    }
}
CardMenu.propTypes = {
    key: PropTypes.number,
    metaData: PropTypes.object,
    handleItemView: PropTypes.func
}

HomeHeader.propTypes = {
    handleClickFilter: PropTypes.func.isRequired
}


export {
    HomeHeader,
    CardMenu
}