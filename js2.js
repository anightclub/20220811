function check(){
    let value=0;
    for(let index=1; index<=25; index++){
        value=index*1.5 + "</br>";
        document.getElementById('h2').innerHTML+=value;
    }

}