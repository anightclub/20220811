function checkFee() {
    let fee = 2500;
    let per = 4/100;
    for (let index = 1; index <= 6; index++) {
        fee = fee*per + fee ;
        let final =index + " year fee = " + fee + "<br>";
        document.getElementById('h4').innerHTML+=final;
        
    }
}