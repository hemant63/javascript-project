
const products=[
    {
        "id":"1",
        "name":"boAt Airdopes",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/m/s/-original-imah3zvdthupfejc.jpeg?q=70"
    },
    {
        "id":"2",
        "name":"NOPE prime",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/i/g/3/prime-with-50hrs-playtime-type-c-bt-5-3-made-in-india-bluetooth-original-imah48yd6hhbggzf.jpeg?q=70"
    },
    {
        "id":"3",
        "name":"POCO M6 5G",
        "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/b/r/-original-imagytcpcnjbduwh.jpeg?q=70"
    },
    {
        "id":"4",
        "name":"vivo T3 lite",
        "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/r/t3-lite-5g-v2356-vivo-original-imah27wmfgkergtx.jpeg?q=70"
    },
    {
        "id":"5",
        "name":"SAMSUNG galaxy A55 5G",
        "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/a/-original-imahyukdvys8thac.jpeg?q=70"
    },
    {
        "id":"6",
        "name":"Acer 54.61cm",
        "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/c/n/8/-original-imahf4rbgwtzquxh.jpeg?q=70"
    },
    {
        "id":"7",
        "name":"SAMSUNG M7 109.22cm",
        "image":"https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/8/s/h/-original-imahfwd3htfc5hfz.jpeg?q=70"
    },
    {
        "id":"8",
        "name":"Noise 4",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/w/r/-original-imah2zf3f6uttfse.jpeg?q=70"
    },
    {
        "id":"9",
        "name":"Fastrack",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/u/j/k/-original-imagx8ncm5ra8nmg.jpeg?q=70"
    },
    {
        "id":"10",
        "name":"Boult",
        "image":"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/7/7/-original-imagg5jypsfdsbjz.jpeg?q=70"
    }
]

var listing= document.getElementById('image')
const tbody=document.getElementById('tbody')

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
const button=document.createElement('button')

    button.id="remove"
    button.innerHTML="Remove"

    button.innerHTML="Add"
    button.id="add"

td2.appendChild(button)

//<img> 
const img=document.createElement('img')
img.id="image"
img.src=item?.image
td1.appendChild(img)  
}

products.map((item)=>{
    createRow(item)
})

function cart(){
    alert("cart clicked!")
}


// Add Event
document.getElementById('add').addEventListener('click',()=>{
    console.log("add event called"+ item?.id)
})

// Remove Event
document.getElementById('remove').addEventListener('click',(e)=>{
    console.log("remove event called")
    document.cookie="username=; expires=Monday, 5 September 2024 12:00:00 path=/"
})

