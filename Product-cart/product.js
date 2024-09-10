import products from "./products.json" with {type: "json"};
const buttons=document.getElementsByClassName('Add');
var cart = []

function mergeArray(arr){
    arr.sort();
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] != arr[i+1]){
            newArr=[...newArr, arr[i]]
        }
    }
    cart=newArr
}

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
            cart=newCart
        }
    })
}



getCookies("productId")

// console.log(cart)

//Display Table
products.map((item)=>{
    createRow(item, "Add")
})

// Add Event
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
     products.map(item=>{
      if(item?.id == e.target.value){
        cart=[...cart,item?.id]
        }  
        mergeArray(cart)
    })
    // productId=[...productId, cart]
    setCookies("productId", cart, 100)
})
})
