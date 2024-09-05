const buttons=document.getElementsByClassName('button');
let string= document.getElementById("output").value || "";
const operator=['+','-','*','/','%']
const inputs=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','%']

//Event to focus on input field
document.getElementById('body').addEventListener('keydown',(e)=>{
    document.getElementById('output').focus()
    append(e.key)
    e.returnValue=false
    // if(inputs.includes(e.key)){
    // } 
    // else{
    //     e.returnValue=false
    // }
})

//onKeyPress Event
function keyboard(e){
    if(inputs.includes(e.key)){
        append(e.key)     
    } 
    else if(e.key=='Enter'){
        try{
            string=eval(string)
        } catch(err){
            return string
        }
    } 
    else if(e.key=='Backspace'){
        string=string.substring(0,(string.length-1))
    } else{
            e.returnValue=false
        }
    console.log(string);
    document.getElementById('output').value=string
}

//onClick Event
Array.from(buttons).forEach(button=>{
    button.addEventListener('click',(e)=>{
        append(e.target.value)
        if(e.target.value == '='){
            try{
                string=eval(string)
            } catch(err){
                return string
            }
        }
        else if(e.target.value == 'C'){
            string=string.substring(0,(string.length-1))
        }
        else if(e.target.value == 'AC'){
            string=""
        }
        else if(e.target.value == '%'){
            string=string/100;
        }
        else if(e.target.value == 'sqrt'){
            string=eval(string*string)
        }
        else {
            string+=e.target.value;
        }
        document.getElementById('output').value=string
    })
})

// Creating string
function append(value){
    if(inputs.includes(value)){
        if(operator.includes(value)&&  operator.includes(string[string.length-1])){
                    string=string.substring(0,(string.length-1))
        }
        string+=value;
    } 
}

// function evaluate(operation){
//         if(operation == '='){
//             string=eval(string)
//         }
//         else if(operation == 'C'){
//             string=string.substring(0,(string.length-1))
//         }
//         else if(operation == 'AC'){
//             string=""
//         }
//         else if(operation == '%'){
//             string=string/100;
//         }
//         else if(operation == 'sqrt'){
//             string=eval(string*string)
//         }
//         else {
//             string+=operation;
//         }
//     console.log(string)
// }
