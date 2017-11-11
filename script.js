// Creating XML Request
var xhr = new XMLHttpRequest();




xhr.open("GET", "https://blockchain.info/ticker", false);
// var response_ = JSON.parse(xhr.responseText);

xhr.send();

var response_ = JSON.parse(xhr.responseText);
console.log(response_.USD.buy);


// Init var results
// return results as the current price in usd

var results = response_.USD.buy;


// Output the results
$("#btc-price > p").html("$" + results);


// Getting chart data
xhr.open("GET", "https://api.coindesk.com/v1/bpi/historical/close.json", false)
xhr.send();


var historical_data = JSON.parse(xhr.responseText)
console.log(historical_data);

var data = historical_data;

console.log(Object.keys(data.bpi).length)
console.log(Object.keys(data.bpi))

var month_len = Object.keys(data.bpi).length;
for(var i = 0; i < 31; ++i){
    console.log(Object.keys(data.bpi)[i]);
}
for(var i = 0; i < 31; ++i){
    $(".table-info > .date-month > ul").append("<li>"+Object.keys(data.bpi)[i].toString() +"</li>");
}

for(var i = 0; i < 31; ++i){
    $(".table-info > .month-price > ul").append("<li>"+Object.values(data.bpi)[i].toString() +"</li>");
}

  
  
