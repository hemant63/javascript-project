# javascript-project
#HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="calculator.css" />
    <script src="calculator.js"></script>
</head>
<body>
    
    <div class="main">
        <!-- <textarea rows="5" cols="30" id="output" readonly></textarea> -->
        <input id="output"  />
        <div class="button-container">
            <div class="button-row">
                <button id="1" value="1" onclick="displayDate(this.innerHTML)">1</button>
                <button id="2" value="2" onclick="displayDate(this.innerHTML)" >2</button>
                <button id="3" value="3" onclick="displayDate(this.innerHTML)">3</button>
                <button id="+" value="+" onclick="displayDate(this.innerHTML)">+</button>
            </div>
            <div class="button-row">
                <button value="4" onclick="displayDate(this.innerHTML)">4</button>
                <button value="5" onclick="displayDate(this.innerHTML)">5</button>
                <button value="6" onclick="displayDate(this.innerHTML)">6</button>                
                <button value="-" onclick="displayDate(this.innerHTML)">-</button>                
            </div>
            <div class="button-row">
                <button value="7" onclick="displayDate(this.innerHTML)">7</button>
                <button value="8" onclick="displayDate(this.innerHTML)">8</button>
                <button value="9" onclick="displayDate(this.innerHTML)">9</button>
                <button value="*" onclick="displayDate(this.innerHTML)">*</button>
            </div>
            <div class="button-row">
                <button value="." onclick="displayDate(this.innerHTML)">.</button>
                <button value="0" onclick="displayDate(this.innerHTML)">0</button>
                <button value="calc" onclick="displayDate(this.innerHTML)">=</button>
                <button value="/" onclick="displayDate(this.innerHTML)">/</button>
            </div>
            
        </div>
    </div>
    
</body>
</html>

#CSS


.main{
    background-color: cadetblue;
    padding: 30px;
    /* margin: 60px; */
    display: inline-block;
    text-align: center;
    width: 300px;
}

textarea{
    width: 80%;
    height: 40%;
}

.button-container{
    width: 300px;
    align-content: center;
}

button{
    width: 60px;
    height: 60px;
    /* margin-right: 20px; */
    font-size: large;
}

#JS
function displayDate(val){
    document.getElementById('output').innerHTML=val;
    console.log(val);
}
