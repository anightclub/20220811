// loop no 5
function checkSpeed() {
    let speed = document.getElementById('speed').value;
    let time = document.getElementById('hour').value;
    for (let  hour = 0; hour <= time; hour++) {
        let final = "you have traveled " + speed * hour + " kilometers in " + hour + " hours" + "<br>";
        document.getElementById('showResult').innerHTML += final;
    }
    // let result = speed * hour;
    // document.getElementById('showResult').innerText = result
}
