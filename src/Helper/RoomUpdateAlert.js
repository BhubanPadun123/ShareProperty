import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import PhotoUploader from './PhotoUploader.js';
import {
    Edit,
    Close
} from "@mui/icons-material"
import {
    IconButton,
    Tooltip
} from "@mui/material"

function RoomUpdate(props) {
    const [state, setState] = React.useState({
        selectedData: props.selectedData,
        images:[]
    })
    console.log("===>", state.images)
    return (
        <Card style={{ width: 'auto', position: 'absolute', top: 10, zIndex: 100,padding:"10px" }}>
            {
                state.selectedData.metaData.hasOwnProperty("images") && Array.isArray(state.selectedData.metaData.hasOwnProperty("images")) && state.selectedData.metaData.hasOwnProperty("images").length > 0 ?
                    state.selectedData.metaData.hasOwnProperty("images").map((item, index) => (
                        <Card.Img variant='top' src={item.src} />
                    )) :
                     state.images.length > 0 ? (
                        <div style={{
                            width:"100%",
                            height:"200px",
                            overflowX:"scroll",
                            overflowY:'hidden',
                            display:'flex',
                            justifyContent:"center",
                            gap:"4px"
                        }}>
                            {
                                state.images.map((item,index)=> (
                                    <div style={{
                                        backgroundImage:`url(${item.src})`,
                                        height:"80%",
                                        width:"80px",
                                        backgroundSize:'cover',
                                        backgroundRepeat:'no-repeat',
                                        display:"flex",
                                        justifyContent:"flex-start",
                                        alignItems:"end",
                                        border:'2px solid red',
                                        borderRadius:"10px"
                                    }}>
                                        <Tooltip title="Remove" placement='bottom' arrow sx={{padding:"0px"}}>
                                            <IconButton>
                                                <Close sx={{color:"red"}} />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                ))
                            }
                        </div>
                     ):
                     (
                        <PhotoUploader 
                          allowClick={true}
                          allowDrag={true}
                          multiple={true}
                          onSelect={(e)=> {
                            let images = []
                            if(Array.isArray(e) && e.length > 0){
                                e.forEach(file => {
                                    images.push({src:URL.createObjectURL(file)})
                                })
                            }
                            setState({...state,images:images})
                          }}
                          title={"Upload Your Room Photos"}
                        />
                    )
            }
            <Card.Body>
                <Card.Title>{`Email : ${state.selectedData.email}`}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default RoomUpdate;