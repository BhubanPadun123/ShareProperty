import React from "react";
import { DNALoader } from "../Helper/Loader"
import {
  HomeHeader,
  CardMenu
} from "../Helper/HomeHeader"
import {
  Box,
  Button,
  Container,
  Paper
} from "@mui/material"
import GlobalAction from "../Redux/actions/GlobalAction";
import { connect } from "react-redux"
import { SetGlobalNotification } from "../Redux/actions/NotificationAction.js";
import PopOver from "../Helper/PopOver.js";
import { serviceList } from "../utils/data.js";
import "../Helper/styles/HomeStyles.css"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";


const HandleGetAllService = new GlobalAction().HandleGetAllService

const NavManu = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  width:70%;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    gap:10px;
    width:100%
  }
`;

const Home = (props) => {

  const navigate = useNavigate()

  const [state, setState] = React.useState({
    serviceList: [],
    showLoading: false,
    anchorElPopover: null
  })

  React.useEffect(() => {
    const fetchServiceList = async () => {
      try {
        await props.HandleGetAllService()
        setState({ ...state, serviceList: props.dataList })
      } catch (error) {
        console.log("Error==>", error)
      }
    }
    fetchServiceList()
  }, [])


  const handleClickFilter = (data) => {
    setState({ ...state, anchorElPopover: data.currentTarget })
  }

  const handleFilter = (data) => {
    console.log(data, state.serviceList)
  }
  const handleItemView = (data) => {
    setState({ ...state, showLoading: true })
    setTimeout(() => {
      setState({ ...state, showLoading: false })
      navigate(`/view-room/${data.metaData.serviceType}`, { state: { data } })
    }, 2000)
  }

  return (
    <Box sx={{
      width: `${window ? `${window.innerWidth}px ` : "100%"}`,
      textAlign: 'center',
      paddingTop: 2,
      paddingBottom:"10px"
    }}>
      <Paper style={{
        display:"flex",
        justifyContent:'center',
        paddingBottom:"10px"
      }}>
        <PopOver
          anchorEl={state.anchorElPopover}
          handleClose={() => { setState({ ...state, anchorElPopover: null }) }}
          childNode={
            <div>
              {
                serviceList.map((item, index) => (
                  <div key={index} style={{
                    backgroundColor: index % 2 === 0 ? "#cfaeab" : "#d97e77"
                  }}>
                    <Button
                      fullWidth
                      sx={{
                        textAlign: 'left',
                        width: "100%"
                      }}
                      onClick={() => handleFilter(item)}
                    >
                      {
                        item
                      }
                    </Button>
                  </div>
                ))
              }
            </div>
          }
        />
        {
          Array.isArray(state.serviceList) && state.serviceList.length > 0 && (
            <NavManu>
                {
                  (state.serviceList || props.dataList).map((item, index) => (
                    <CardMenu
                      key={index}
                      metaData={item}
                      handleItemView={handleItemView}
                    />
                  )
                  )
                }
              
            </NavManu>
          )
        }
        {
          (props.status === "started" || state.showLoading) && (
            <div className="col-md-12" style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "GrayText",
              opacity: 0.8,
              zIndex: 20
            }}>
              <DNALoader />
            </div>
          )
        }
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state) => {

  return {
    serviceList: state.getAllService,
    dataList: state.getAllService.status === "success" ? state.getAllService.response.info : state.getAllService.response,
    status: state.getAllService.status
  }
}

export default connect(mapStateToProps, {
  HandleGetAllService,
  SetGlobalNotification
})(Home)
