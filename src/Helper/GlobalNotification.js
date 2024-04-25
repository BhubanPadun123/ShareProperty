import React from "react";
import { Alert } from "@mui/material"



class GlobalNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{
                position: "absolute",
                width:"100%"
            }}>
                <Alert variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
            </div>
        )
    }
}

export default GlobalNotification