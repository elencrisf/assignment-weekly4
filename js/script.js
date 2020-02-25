
function convertCurrency() {


  let from = $("#from").val();
  let to = $("#to").val();



  const exchangeKey = "0d7875d57577e85a15cfaeb49c7d47c8";
  // const exchangeKey = "e0a9088d1c88ba56fce4d3180b78218a";

  var url = `http://api.currencylayer.com/live?access_key=${exchangeKey}&from=${from}&to=${to}`;

  
  fetch(url)

  .then(function(response) {
  if(response.status !== 200) {
      console.log("error," + response.status);
  }
  response.json().then(function(data) {



    let oneUnit = data.quotes["USD" + to]/data.quotes["USD" + from];
    let amt = document.getElementById("fromAmount").value;
    document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
    
    let quote1 = data.quotes["USD" + to]/data.quotes["USD" + from];
    document.getElementById("quote1").innerHTML = (quote1).toFixed(5);
    



  console.log(data);
  })
  .catch(function(error) {
    if(response.status == 404) {

      alert('Not found');
      console.log("There is a error" + error);
    }
    console.log("Something is wrong" + error);
  })
});
}






function historicalCurrency() {

 
  let from = $("#from").val();
  let to = $("#to").val();

  let date = $("#date").val();


  const exchangeKey = "0d7875d57577e85a15cfaeb49c7d47c8";
  // const exchangeKey = "e0a9088d1c88ba56fce4d3180b78218a";


  var url = `http://api.currencylayer.com/historical?access_key=${exchangeKey}&from=${from}&to=${to}&date=${date}`;


  
  fetch(url)

  .then(function(response) {
  if(response.status !== 200) {
      console.log("error," + response.status);
  }
  response.json().then(function(data) {



    let oneUnit = data.quotes["USD" + to]/data.quotes["USD" + from];
    let amt = document.getElementById("fromAmount").value;
    document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
    
    let quote1 = data.quotes["USD" + to]/data.quotes["USD" + from];
    // let quote1 = data.quotes.USDBRL;
    document.getElementById("quote1").innerHTML = (quote1).toFixed(5);
    



  console.log(data);
  })
  .catch(function(error) {
    if(response.status == 404) {

      alert('Not found');
      console.log("There is a error" + error);
    }
    console.log("Something is wrong" + error);
  })
});
}





