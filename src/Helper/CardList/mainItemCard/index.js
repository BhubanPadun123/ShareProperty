import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
// import "./styles.css"
import {
    Card,
    Container,
    Button,
    ListGroup,
    Badge,
    Pagination,
    Table,
    Figure,
    Image,
    Form
} from "react-bootstrap"
import { images } from "../../../utils/data"
import { useLocation } from "react-router-dom"
import { Divider, Paper } from "@mui/material"



function MainItemViewCard(props) {
    const location = useLocation()
    const [state, setState] = React.useState({
        images: location.state.data ? location.state.data.images : [],
        email: location.state.data ? location.state.data.email : "",
        metaData: location.state.data ? location.state.data.metaData : {},
        currentImgURL: location.state.data ? location.state.data.images.length > 0 && location.state.data.images[0].src : "",
        currentImgIndex: 0
    })


    const handleImgForward = () => {
        if (state.images.length === 0) return;
        if (state.currentImgIndex < state.images.length - 1) {
            setState({ ...state, currentImgIndex: state.currentImgIndex + 1, currentImgURL: state.images[state.currentImgIndex + 1].src })
        }
        if (state.images.length - 1 === state.currentImgIndex) {
            setState({ ...state, currentImgIndex: 0, currentImgURL: state.images[0].src })
        }
    }
    const handleImgBack = () => {
        if (state.images.length === 0) return;
        if (state.currentImgIndex === 0) {
            console.log("hello1")
            setState({ ...state, currentImgIndex: state.images.length - 1, currentImgURL: state.images[state.images.length - 1].src })
        }
        if (state.currentImgIndex > 0 && state.currentImgIndex < state.images.length) {
            console.log("hello2")
            setState({ ...state, currentImgIndex: state.currentImgIndex - 1, currentImgURL: state.images[state.currentImgIndex - 1].src })
        }
    }

    var imagePaginationList = [];
    if (state.images.length > 0) {
        state.images.map((item, index) => {
            imagePaginationList.push(
                <Pagination.Item key={index} active={index === state.currentImgIndex} title={index} />
            )
        })
    }
    console.log(state.metaData)
    return (
        <Paper elevation={0} className="col-md-12 col-sx-12 col-lg-12 p-4" sx={{ marginTop: "auto", width: "100%", display: "flex", flexDirection: 'column', gap: "20px", justifyContent: 'center', alignItems: "center" }}>
            <Container className="p-4 w-100 d-flex justify-content-center flex-column gap-4 align-items-center">
                <Card className="h-100 bg-success">
                    <Card.Header className="w-100 d-flex flex-column justify-content-center align-items-center gap-sm-1 gap-md-4 h-100 pb-4">
                        <Card.Img className="col-md-6 col-sm-12" alt="images" src={Array.isArray(state.images) && state.images.length > 0 ? state.currentImgURL : images.newsImg} style={{ height: "400px", maxWidth: "650px", minWidth: "500px", padding: "4px", border: '1px solid' }} />
                        {
                            state.images.length > 0 && (
                                <Card.Title className="d-flex">
                                    <Pagination>
                                        {
                                            imagePaginationList
                                        }
                                    </Pagination>
                                </Card.Title>
                            )
                        }
                        <Card.Link className="d-flex gap-4">
                            <Button title="Back" variant="info" onClick={handleImgBack} >
                                <i class="bi bi-arrow-bar-left"></i>
                            </Button>
                            <Button variant="warning" title="Next" onClick={handleImgForward} >
                                <i class="bi bi-arrow-bar-right"></i>
                            </Button>
                        </Card.Link>
                    </Card.Header>
                </Card>
            </Container>
            <Divider sx={{ border: "2px solid red", borderRadius: "12px" }} />
            {/* <Container> */}
            <Table striped className="w-100 p-0 m-0 col-md-6" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="bg-warning w-50 h-100">
                            <div style={{
                                width: "100%",
                                minHeight: "100%",
                                border: "2px solid white"
                            }}>
                                dfdf
                            </div>
                        </th>
                        <th className="bg-info w-50">
                            <Badge bg="secondary" className="w-100">
                                <Figure className="w-100 d-flex flex-column gap-4" >
                                    <Figure.Caption className="w-100">
                                        <Image className="col-md-4 w-50 " alt="image" src={images.address_location} />
                                    </Figure.Caption>
                                    <Figure.Caption>
                                        <h3 className="text-light">
                                            Address
                                        </h3>
                                    </Figure.Caption>
                                </Figure>
                            </Badge>
                        </th>
                    </tr>
                    <tr>
                        <th className="bg-info w-50">
                            <Badge bg="secondary" className="w-100">
                                <Figure className="w-100 d-flex flex-column gap-4" >
                                    <Figure.Caption className="w-100">
                                        <Image className="col-md-4 w-50 " alt="image" src={images.room_tool} />
                                    </Figure.Caption>
                                    <Figure.Caption>
                                        <h3 className="text-light">
                                            Room Holding<br /> Aminities
                                        </h3>
                                    </Figure.Caption>
                                </Figure>
                            </Badge>
                        </th>
                        <th className="bg-warning w-50">
                            <Badge bg="secondary w-100">
                                dsfdfdfdsfsdfsdfsdfs
                            </Badge>
                        </th>
                    </tr>
                    <tr>
                        <th className="bg-warning w-50">
                            <Badge bg="secondary w-100">
                                dsfdfdfdsfsdfsdfsdfs
                            </Badge>
                        </th>
                        <th className="bg-info w-50">
                            <Badge bg="secondary" className="w-100">
                                <Figure className="w-100 d-flex flex-column gap-4" >
                                    <Figure.Caption className="w-100">
                                        <Image className="col-md-4 w-50 " alt="image" src={images.gender} />
                                    </Figure.Caption>
                                    <Figure.Caption>
                                        <h3 className="text-light">
                                            Room <br /> Occopancy
                                        </h3>
                                    </Figure.Caption>
                                </Figure>
                            </Badge>
                        </th>
                    </tr>
                    <tr>
                        <th className="bg-info w-50">
                            <Badge bg="secondary" className="w-100">
                                <Figure className="w-100 d-flex flex-column gap-4" >
                                    <Figure.Caption className="w-100">
                                        <Image className="col-md-4 w-50 " alt="image" src={images.room_payment} />
                                    </Figure.Caption>
                                    <Figure.Caption>
                                        <h3 className="text-light">
                                            Rent Details
                                        </h3>
                                    </Figure.Caption>
                                </Figure>
                            </Badge>
                        </th>
                        <th className="bg-warning w-50">
                            <Badge bg="secondary w-100">
                                dsfdfdfdsfsdfsdfsdfs
                            </Badge>
                        </th>
                    </tr>
                    <tr>
                        <th className="bg-warning w-50 h-100">
                            <Badge bg="secondary w-100 h-100" style={{ height: "100%" }}>
                                {
                                    state.metaData && state.metaData.serviceList && Array.isArray(state.metaData.serviceList) && state.metaData.serviceList.length > 0 &&
                                    state.metaData.serviceList.map((item, index) => (
                                        <h5 key={index}>
                                            {
                                                item
                                            }
                                        </h5>
                                    ))
                                }
                            </Badge>
                        </th>
                        <th className="bg-info w-50">
                            <Badge bg="secondary" className="w-100">
                                <Figure className="w-100 d-flex flex-column gap-4" >
                                    <Figure.Caption className="w-100">
                                        <Image className="col-md-4 w-50 " alt="image" src={images.service_list} />
                                    </Figure.Caption>
                                    <Figure.Caption>
                                        <h3 className="text-light">
                                            Offering <br /> For
                                        </h3>
                                    </Figure.Caption>
                                </Figure>
                            </Badge>
                        </th>
                    </tr>
                </tbody>
            </Table>
            <Container className="col-md-12 col-xs-12 d-flex justify-content-center pt-4">
                <Card className="col-md-6">
                    <Card.Body>
                        <h4 className="text-success display-5">Contact</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Your Email.</Form.Label>
                                <Form.Control size="md" placeholder="example@gmail.com" type='email' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Your Contact Number</Form.Label>
                                <Form.Control size="md" placeholder="0987654321" type='number' />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success">
                                    Submit?
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Paper>
    )
}

const mapStateToProps = (state) => {

    return {
        state
    }
}

export default connect(mapStateToProps, {

})(MainItemViewCard)