//xvYJMaehJPGFHdpplLl09eW4DrwX09T6

var myHeaders = new Headers();
myHeaders.append("apikey", "xvYJMaehJPGFHdpplLl09eW4DrwX09T6");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

let myRates;

let data = fetch("https://api.apilayer.com/fixer/convert?to=RUB&from=EUR&amount=10", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    myRates = result.info.rate;
    //console.log(myRates);
    })
  .catch(error => console.log('error', error))  
  ;  



const cur1 = document.getElementById('cur1');
const cur2 = document.getElementById('cur2');

function changeCur(event) {
    //console.log('change filder: ' + event.target.value);
    cur2.value = parseFloat(event.target.value / myRates).toFixed(2);
}

// cur1.addEventListener('keyup', (event) =>{
//     console.log('button push');
// });

// cur1.addEventListener('mouseup', (event) =>{
//     console.log('arron push');
// });

cur1.addEventListener('keyup', changeCur);
cur1.addEventListener('mouseup', changeCur);

function changeCur2(event) {
    //console.log('change filder: ' + event.target.value);
    cur1.value = parseFloat(event.target.value * myRates).toFixed(2);
}

cur2.addEventListener('keyup', changeCur2);
cur2.addEventListener('mouseup', changeCur2);