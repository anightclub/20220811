function checkCalories(){
    let value=0;
    for(let index=5; index<= 30; index+=5 ){
        value="You wiil burend in " + index + " minutes " +index*3.6 +  " calories" + "<br>";
        document.getElementById('h3').innerHTML+=value;
    }

}