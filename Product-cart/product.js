import products from "./products.json" with {type: "json"};
const add=document.getElementsByClassName('add');
const remove=document.getElementsByClassName('remove');
var cart = []

cart= getCookies("productId")

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


//Display Table
products.map((item)=>{
    createRow(item)
})


// Add Event
Array.from(add).forEach(button =>{
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

// Delete Event
Array.from(remove).forEach(button =>{
    button.addEventListener('click', (e)=>{
        deleteCookie(e.target.value)
})
})
