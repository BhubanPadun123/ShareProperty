import * as React from 'react';
import Popover from '@mui/material/Popover';
import PropTypes from "prop-types"

export default function PopOver(props) {

    const open = Boolean(props.anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                anchorPosition={{
                    top: 400,
                    left:0
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                sx={{                   
                    '.MuiPopover-paper':{
                        width:"100%",
                        textAlign:'center',
                        padding:"10px"
                    }
                }}
            >
                {
                    props.childNode
                }
            </Popover>
        </div>
    );
}

PopOver.propTypes = {
    anchorEl: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    childNode: PropTypes.node.isRequired
}