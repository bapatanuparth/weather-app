const request=require('request')

const weat=(address,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address)+'&appid=7c08c3c8deb52fc206fd3296b9af964f&units=metric'
    request({url,json:true},(error,{body})=>{
    if(error)
    {
        callback('Unable to connect to internet!',undefined)
    }
    else if(body.main==undefined){
        callback('Unable to find location',undefined)
    }
    else{
        callback(undefined,'the temparature at '+address+' is '+body.main.temp)
    }
})
}

module.exports=weat