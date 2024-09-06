const buttons=document.getElementsByClassName('button');
let string= document.getElementById("output").value || "";
const operator=['+','-','*','/','%']
const inputs=['1','2','3','4','5','6','7','8','9','0','+','-','*','/']

//keyDown Event 
document.getElementById('body').addEventListener('keydown',(e)=>{
    document.getElementById('output').focus()
    append(e.key)
    evaluate(e.key)
})

//onClick Event
Array.from(buttons).forEach(button=>{
    button.addEventListener('click',(e)=>{
        append(e.target.value)
        evaluate(e.target.value)
    })
})

// Creating string Function
function append(value){
    console.log(value)
    if(inputs.includes(value)){
        if(operator.includes(value)&&  operator.includes(string[string.length-1])){
                    string=string.substring(0,(string.length-1))
        }
        string+=value;
    }
    else if(value == "Backspace" || value == "C"){
        string=string.substring(0,(string.length-1))
    }
    else if(value == "Delete" || value == "AC"){
        string=""
    }
    document.getElementById('output').value=string
}

//Evaluation Function
function evaluate(operation){
    if(operation == "Enter" || operation == "="){
        try{
            string=eval(string)
            string=String(string)
        } catch(err){
            return string
        }
    }
    else if(operation == '%'){
        string=Number(string)/100;
    }
    else if(operation == 'sqrt'){
        string=eval(string*string)
        string=String(string)
    }
    document.getElementById('output').value=string
}
