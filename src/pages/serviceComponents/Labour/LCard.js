import React from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {
    Card
} from "react-bootstrap"
import {
    Avatar,
    Button
} from "@mui/material"


function LCard(props){
    const [state,setState] = React.useState({
        metaData: props.metaData
    })

    return(
        <div className="w-100 h-100">
            <Card>
                <Card.Header className="d-flex justify-content-center">
                    <Avatar src={props.metaData.images && props.metaData.images[0]} />
                </Card.Header>
                <Card.Title>
                    About
                </Card.Title>
                <Card.Body style={{
                    display:"flex",
                    flexDirection:'row',
                    gap:"4px",
                    justifyContent:'center',
                    alignItems: 'center',
                    width:"100%"
                }}>
                    <div style={{
                        width:"100%",
                        flex:"1",
                        border:"1px solid",
                        padding:"4px",
                        borderRadius:"12px"
                    }}>
                        <h3 style={{ 
                            width:"100%",
                            borderBottom:"2px solid red",
                            boxShadow:"initial"
                        }}>
                            Address Details.
                        </h3>
                        {
                            state.metaData.hasOwnProperty('metaData') && state.metaData.metaData.hasOwnProperty('address') && (
                                Object.entries(state.metaData.metaData.address).map((item)=> (
                                    <div style={{
                                        display:"flex",
                                        width:"100%",
                                        justifyContent:"center",
                                        gap:"10px"
                                    }}>
                                      <span style={{
                                        fontFamily:"Lato",
                                        fontSize:"30px",
                                        fontWeight:500,
                                        fontStyle:"normal"
                                      }}>
                                        {
                                            item[0]
                                        }:
                                      </span>
                                      <span style={{
                                        fontFamily:"Lato",
                                        fontSize:"30px",
                                        fontWeight:500,
                                        fontStyle:"normal"
                                      }}>
                                        {
                                            item[1]
                                        }
                                      </span>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button variant='contained'>
                        Hire
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

LCard.propTypes = {

}

const mapStateToProps = state=> {


    return {
        state
    }
}

export default connect(mapStateToProps,{

})(LCard)

