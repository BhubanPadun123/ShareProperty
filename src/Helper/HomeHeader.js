import React from "react";
import {
    Search,
    FilterAlt,
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight
} from "@mui/icons-material"
import {
    InputAdornment,
    TextField,
    IconButton,
    Tooltip,
    Grid,
    Container,
    Paper,
    Box,
    Typography,
    Divider
} from "@mui/material"
import pic_1 from "../image/school_1.jpg"
import PropTypes from "prop-types"
import { serviceListData } from "../utils/data";
import "./styles/HomeStyles.css"


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

class RoomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomImgSrc: pic_1,
            imgIndex: 0
        }
    }

    handleImgForwardBackward = (type) => {
        console.log(this.state.imgIndex, type, serviceListData.length)
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
        console.log(this.props)
        return (
            <div className="col-md-12">
                <ul className="cards">
                    <li>
                        <div href="" className="card">
                            <img src={this.state.roomImgSrc} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Jessica Parker</h3>
                                        <span className="card__status">1 hour ago</span>
                                    </div>
                                    <div className="card__header-button">
                                        <IconButton onClick={()=> this.handleImgForwardBackward("backward")}>
                                            <KeyboardDoubleArrowLeft />
                                        </IconButton>
                                        <IconButton onClick={()=> this.handleImgForwardBackward("forward")}>
                                            <KeyboardDoubleArrowRight />
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="card__description">
                                    <span>1BHK Independent House </span>,
                                    <span>Jonai,Murkongselec,Dhemaji</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div href="" className="card">
                            <img src={this.state.roomImgSrc} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Jessica Parker</h3>
                                        <span className="card__status">1 hour ago</span>
                                    </div>
                                    <div className="card__header-button">
                                        <IconButton onClick={()=> this.handleImgForwardBackward("backward")}>
                                            <KeyboardDoubleArrowLeft />
                                        </IconButton>
                                        <IconButton onClick={()=> this.handleImgForwardBackward("forward")}>
                                            <KeyboardDoubleArrowRight />
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="card__description">
                                    <span>1BHK Independent House </span>,
                                    <span>Jonai,Murkongselec,Dhemaji</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
RoomCard.propTypes = {
    key: PropTypes.number,
    metaData: PropTypes.object
}

HomeHeader.propTypes = {
    handleClickFilter: PropTypes.func.isRequired
}


export {
    HomeHeader,
    RoomCard
}