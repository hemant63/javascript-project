import products from "./products.json" with {type: "json"};
const buttons=document.getElementsByClassName('Remove');
var cart = []
// Getting value from cookies
function getCookies(name){
    let newCart
    const data = document.cookie.split(';')
    data.forEach(value=>{
        let v =value.split('=')
        let keyName=v[0]
        if(keyName.charAt(0)==' '){
            keyName=keyName.substring(1)
        }
        if(name == keyName){
            newCart = v[1].split(',')
            cart = newCart
        }
    })
}

getCookies("productId")

console.log(cart)

// getCookies("productId").then(
//     function(value){
//         console.log(value)
//     },
//     function(error){
//         console.log(error)
//     }
// );

products.map(item=>{
    cart.map((id)=>{
        if(item?.id == id)
            createRow(item, "Remove")
    })
})

// Delete items from cookie
function deleteCookie(id){
    let newCart=cart.filter(val=>{
        return val != id
    })
    setCookies("productId",newCart,100)
    console.log(newCart)
}



// Delete Event
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
        deleteCookie(e.target.value)
})
})

