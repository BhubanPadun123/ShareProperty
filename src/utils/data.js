import car_1 from "../image/car_1.avif"
import medical_1 from "../image/medical_1.jpg"
import tractor_1 from "../image/tractor_1.jpg"
import worker_1 from "../image/worker_1.jpg"
import school_1 from "../image/school_1.jpg"
import construction_1 from "../image/construction_1.avif"
import roomImg  from "../image/roomImg.webp"
import news from "../image/news.avif"
import newsCover from "../image/newImg.jpg"
import sList from "../image/ListS.jpg"
import Address from "../image/location.avif"
import tool from "../image/pDetails.jpg"
import gender from "../image/gender.jpg"
import roomPayment from "../image/paymentRoom.jpg"

export const images = {
    newsImg:news,
    newsCoverImg: newsCover,
    room_tool: tool,
    address_location: Address,
    service_list: sList,
    gender:gender,
    room_payment: roomPayment
}

export const serviceList = ["Room Rent","Hospital Service","Tractor Rent","Gurdant Worker","School Service","Construction Worker","News"]

export const serviceListData = [
    {
        label:"Room Rent",
        label_icon: roomImg,
        service_menu:[
            "Rent for Student",
            "Rent",
            "Rent for Store",
            "Rent from warehouse"
        ]
    },
    {
        label:"Hospital Service",
        label_icon: medical_1,
        service_menu: [
            "Dibrughar",
            "Dhemaji",
            "Silapother",
            "Lokhimpur",
            "Jorhat",
            "Tezpur",
            "Guwahati"
        ]
    },
    {
        label:"Tractor Rent",
        label_icon: tractor_1,
        service_menu:[
            "Soil",
            "Sand",
            "T-Gravel",
            "Sand-Gravel",
            "Wood-Carry",
        ]
    },
    {
        label:"School Service",
        label_icon: school_1,
        service_menu:[
            "School",
            "Shopping",
            "Party",
            "Hospital",
            "Tour"
        ]
    },
    {
        label:"Gurdant Worker",
        label_icon: worker_1,
        service_menu: [ ]
    },
    {
        label:"Construction Worker",
        label_icon: construction_1,
        service_menu:[
            "Soil",
            "Sand",
            "T-Gravel",
            "Sand-Gravel",
            "Wood-Carry",
        ]
    },
    {
        label:"News",
        label_icon: news,
        service_menu:[
            "Education",
            "Business",
            "Job",
            "Tranding",
            "Other"
        ]
    }
]