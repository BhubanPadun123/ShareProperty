import { Paper, Typography } from "@mui/material"
import PropTypes from "prop-types"
import React from "react"
import {connect} from "react-redux"
import {
    Card
} from "react-bootstrap"
import {images} from "../../../utils/data" 


function News(props){


    return (
        <Paper>
            <Card className="col-md-12 col-lg-12 col-sm-12">
                <Card.Header className="col-md-12 col-lg-12 col-sm-12 d-flex">
                    <Card.Img className="col-md-6 col-lg-4 col-sm-6 w-50 p-10" alt="image" src={images.newsCoverImg} />
                    <Card.Title className="col-md-6 d-flex flex-column gap-3 justify-content-center">
                        <Typography className="text-primary" sx={{
                            fontFamily:"Lato",
                            fontWeight:500,
                            fontSize:"30px",
                            fontStyle:"italic",
                            letterSpacing:0.8
                        }}>
                            You Can Post Your News
                        </Typography>
                    </Card.Title>
                </Card.Header>
            </Card>
        </Paper>
    )
}

const mapStateToProps=(state)=> {

    return {
        state
    }
}

export default connect(mapStateToProps,{

})(News)