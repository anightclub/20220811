
    function checkSum(){
        let number=document.getElementById('number1').value;
        let sum=0;
        for(let index=0; index<=number; index++){
        sum+=index;
        }document.getElementById('h11').innerHTML=sum;
        }