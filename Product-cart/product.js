import products from "./products.json" with {type: "json"};
var cartItems
(document.cookie)?  cartItems = JSON.parse(document.cookie) : cartItems=[]
const tbody=document.getElementById('tbody')
const buttons=document.getElementsByClassName('add');

//Create Table
function createRow(item){
//<tr class="row">
const tr=document.createElement('tr')
tr.className="row"
tbody.appendChild(tr)

//<td>
const td1=document.createElement('td')
tr.appendChild(td1)

//<td class="content">
const td2=document.createElement('td')
td2.className="content"
tr.appendChild(td2)

// <p id="name">
const p=document.createElement('p')
p.innerHTML=item?.name
p.id="name"
td2.appendChild(p)

// <button>
const button=document.createElement('button');
// cartItems.map(cartItem=>{
//     if(cartItem?.id == item?.id){
//         button.innerHTML="Remove"
//         button.className="remove"
//     }
    
// })
button.innerHTML="Add";
button.className="add"; 
    button.value=item?.id;

td2.appendChild(button);

//<img> 
const img=document.createElement('img')
img.id="image"
img.src=item?.image
td1.appendChild(img)  
}

//Display Table
products.map((item)=>{
    createRow(item)
})

// Add Event
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
     products.map(item=>{
      if(item?.id == e.target.value){
        cartItems=[...cartItems, item]
        }  
    })
    console.log(cartItems)
    document.cookie=JSON.stringify(cartItems)
})
})