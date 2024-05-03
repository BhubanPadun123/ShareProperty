import React from "react";
import { DNALoader } from "../Helper/Loader"
import { 
  HomeHeader ,
  RoomCard
} from "../Helper/HomeHeader"
import {
  Box,
  Button,
  Container,
  Paper
} from "@mui/material"
import GlobalAction from "../Redux/actions/GlobalAction";
import {connect} from "react-redux"
import { SetGlobalNotification } from "../Redux/actions/NotificationAction.js";
import PopOver from "../Helper/PopOver.js";
import { serviceList } from "../utils/data.js";


const HandleGetAllService = new GlobalAction().HandleGetAllService

const Home = (props) => {

  const [state,setState] = React.useState({
    serviceList:[],
    showLoading: false,
    anchorElPopover: null
  })

  React.useEffect(()=>{
    const fetchServiceList = async()=>{
      try {
        await props.HandleGetAllService()
      } catch (error) {
        console.log("Error==>",error)
      }
    }
    fetchServiceList()
  },[])

  React.useEffect(()=>{
    if(props.serviceList.status && props.serviceList.status === "started"){
      setState({...state,showLoading: true})
    }else if(props.serviceList.status && props.serviceList.status === "success"){
      const {
        response
        } = props.serviceList
        if(response){
          setState({
            ...state,
            showLoading: false,
            serviceList : response.info
          })
        }
    }else if(props.serviceList.status && props.serviceList.status === "error"){
      props.SetGlobalNotification({
        status:"error",
        message:"Error while data Fetch.....Please try again."
      })
    }
  },[props.serviceList])

  const handleClickFilter=(data)=> {
    setState({...state,anchorElPopover:data.currentTarget})
  }

  const handleFilter =(data)=> {
    console.log(data,state.serviceList)
  }

  return (
    <Box sx={{
      width: `${window ? `${window.innerWidth}px ` : "100%"}`,
      textAlign: 'center',
      paddingTop: 2
    }} component={Paper}>
      <HomeHeader 
        handleClickFilter={handleClickFilter}
      />
      <Paper>
        <PopOver
           anchorEl = {state.anchorElPopover}
           handleClose={()=> {setState({...state,anchorElPopover: null})}}
           childNode={
            <div>
              {
                serviceList.map((item,index)=> (
                  <div key={index} style={{
                    backgroundColor: index % 2 === 0 ? "#cfaeab" : "#d97e77"
                  }}>
                    <Button
                      fullWidth
                      sx={{
                        textAlign:'left',
                        width:"100%"
                      }}
                      onClick={()=> handleFilter(item)}
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
          Array.isArray(state.serviceList) && state.serviceList.length > 0 && 
          state.serviceList.map((item,index)=> {
            if(item.metaData.serviceType=== "Room Rent"){
              return (
                <RoomCard 
                   key={index}
                   metaData={item}
                />
              )
            }
          })
        }
        {
          state.showLoading && (
            <DNALoader />
          )
        }
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state)=> {
  console.log(state,"<=====")
  return {
    serviceList: state.getAllService
  }
}

export default connect(mapStateToProps,{
  HandleGetAllService,
  SetGlobalNotification
})(Home)
