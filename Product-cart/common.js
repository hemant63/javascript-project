const tbody=document.getElementById('tbody')

//Create Table
function createRow(item,btnType){
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
    button.innerHTML=btnType;
    button.className=btnType; 
        button.value=item?.id;
    
    td2.appendChild(button);
    
    //<img> 
    const img=document.createElement('img')
    img.id="image"
    img.src=item?.image
    td1.appendChild(img)  
}

// setting value to cookies
function setCookies(name, value, days){
    const d = new Date()
    d.setTime(d.getTime()+(days*24*60*60*1000))
    document.cookie=`${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

