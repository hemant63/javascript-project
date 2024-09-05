# javascript-project
#html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="calculator.css" />
</head>
<body>
    
    <div class="main">
        
        <div class="button-container">
            <h1>Calculator</h1>
            <input id="output" type="text" oninput="display()" onkeydown="validate(event.key)"> 
            <div class="button-row">
                <button class="button" >AC</button>
                <button class="button">%</button>
                <button class="button" value="sqrt">x<sup>2</sup></button>
                <button class="button" >C</button>
            </div>
            <div class="button-row">
                <button class="button" >1</button>
                <button class="button" >2</button>
                <button class="button" >3</button>
                <button class="button operator">+</button>
            </div>
            <div class="button-row">
                <button class="button" >4</button>
                <button class="button" >5</button>
                <button class="button" >6</button>                
                <button class="button operator" >-</button>                
            </div>
            <div class="button-row">
                <button class="button" >7</button>
                <button class="button" >8</button>
                <button class="button" >9</button>
                <button class="button operator" >*</button>
            </div>
            <div class="button-row">
                <button class="button" >.</button>
                <button class="button" >0</button>
                <button class="button" id="result">=</button>
                <button class="button operator" >/</button>
            </div>
            
        </div>
    </div>
    
    <script src="calculator.js"></script>
</body>
</html>

#css


.main{
    padding: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    
    justify-content: center;
}

input{
    padding: 20px 17px;
    margin: 15px 20px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 9px;
    text-align: right;
}

.button-container{
    width: auto;
    align-items: center;
    justify-content: center;
}

.button-row{
    margin: 10px;
}

button{
    width: 60px;
    height: 60px;
    margin: 2px 5px;
    font-size: large;
    border: 2px solid black;
    border-radius: 9px;
}
