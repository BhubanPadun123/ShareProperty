import React from "react";
import { Alert } from "@mui/material"
import { connect } from "react-redux"
import { ResetGlobalNotification } from "../Redux/actions/NotificationAction";



class GlobalNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data.response.status !== this.props.data.response.status){
            setTimeout(()=> {
                this.props.ResetGlobalNotification()
            },4000)
        }
    }


    render() {
        const {
            response
        } = this.props.data
        if (response.status) {
            return (
                <div style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 100,
                    top: 100,
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Alert variant="filled" severity={response.status}>
                        {
                            response.message
                        }
                    </Alert>
                </div>
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.globalNotification
    }
}


export default connect(mapStateToProps, {ResetGlobalNotification})(GlobalNotification)