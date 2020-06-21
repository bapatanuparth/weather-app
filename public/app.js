//Use fettch api to connect client side js to html page
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msg=document.querySelector('#msg')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value

    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            msg.textContent=data.error
        }
        else{
            msg.textContent=data.forecast
            console.log(data)
        }
    })

})
    console.log(location)
})