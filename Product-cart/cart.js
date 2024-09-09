
const tbody=document.getElementById('tbody')
const buttons=document.getElementsByClassName('remove');
// var cartItems
// (document.cookie)?  cartItems = JSON.parse(document.cookie) : cartItems=[]
var cartItems=JSON.parse(document.cookie)

console.log(cartItems)


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
        button.innerHTML="Remove";
        button.className="remove"; 
        button.value=item?.id;
    
    td2.appendChild(button);
    
    //<img> 
    const img=document.createElement('img')
    img.id="image"
    img.src=item?.image
    td1.appendChild(img)  
}

cartItems.map((item)=>{
    createRow(item)
})
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
        let newCart=[]
     cartItems.map(item=>{
      if(item?.id != e.target.value){
        newCart=[...newCart, item]
        }  
    })
    cartItems=newCart
    console.log(cartItems)
    document.cookie="  username= ; expires=Monday, 08 sept 2024 00:00:00 UTC; ";
    console.log("cookie set")
    console.log(document.cookie)
    document.cookie=JSON.stringify(cartItems)
})
})
