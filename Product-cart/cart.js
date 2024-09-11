import products from "./products.json" with {type: "json"};
const buttons=document.getElementsByClassName('remove');
var cart = []

cart= getCookies("productId")

products.map(item=>{
    cart.map((id)=>{
        if(item?.id == id){
            createRow(item)
        console.log(item)
        }
    })
})





// Delete Event
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
        deleteCookie(e.target.value)
})
})

