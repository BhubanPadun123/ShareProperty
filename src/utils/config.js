

var config = {}

if(process.env.NODE_ENV === 'production'){
    config={
        baseUrl:"http://property-share-server.com"
    }
}else if(process.env.NODE_ENV === 'development'){
    config={
        baseUrl:'http://localhost:8000'
    }
}else if(process.env.NODE_ENV === 'test'){
    config={
        baseUrl:'http://texting'
    }
}

export default config