const buttons=document.getElementsByClassName('button');
let string=document.getElementById('output').value || " ";
const operator=['+','-','*','/','%']
const inputs=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','%']

// function validate(key){
//     if(inputs.includes(key)){
//         string += key
//     } 
//     console.log(string)
//     document.getElementById('output').value = string;
// }


function stringCheck(string){
    
    if(operator.includes(string[string.length-1])){

        let prevString=string.substr(0,(string.length-1))
        let newOperator=string[string.length-1]
        let newString=prevString.replace(prevString[prevString.length-1],newOperator)

        if(operator.includes(string[string.length-3])){
            string=prevString
        }

        if(operator.includes(string[string.length-2])){
            if(operator.includes(string[string.length-2])  && string[string.length-2] != '+' && string[string.length-2] != '-'){
                if(string[string.length-1] == '-'){
                    newString=string
                } else {
                    string=newString
                }
                
            } else {
                string = newString
            }
        }
        
    }
    return string
}

function display(){
    string=document.getElementById('output').value;
     string=stringCheck(string);
     document.getElementById('output').value=string;
}

Array.from(buttons).forEach(button=>{
    //Adding event listener on each button click
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
        }
        else if(operator.includes(e.target.innerHTML)){
            string+=e.target.innerHTML;
              string= stringCheck(string);
        }
        else if(e.target.innerHTML=='C'){
               string=string.substr(0,(string.length-1))
           }
        else if(e.target.innerHTML=='AC'){
            string="";
        }
        else if(e.target.value=='sqrt'){
            let x=Number(string);
            string=String(x*x);
        }
        else{
            string+=e.target.innerHTML;
        }
        document.getElementById('output').value=string;
    })
})