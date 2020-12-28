var btn = document.querySelector('button');
 
var div = document.querySelector('.div');
var divBuy = document.querySelector('.buy span');
var divSell = document.querySelector('.sell span');
var divBuy2 = document.querySelector('.buy2 span');
var divSell2 = document.querySelector('.sell2 span');

 
 
  var currentPrice_BuyCOIN_USD = null;
  var currentPrice_SellCOIN_USD = null;
  var currentPrice_BuyCOIN_USD_livecoin = null;
  var currentPrice_SellCOIN_USD_livecoin = null;
	
var value1 = document.querySelector('.inputdrub1 span');
var value2 = document.querySelector('.inputdrub2 span'); 
var value1tt = document.querySelector('.inputdrub1tt span');
var value2tt = document.querySelector('.inputdrub2tt span');

var profit1 = document.querySelector('.inputdrub3 span');
var profit333 = document.querySelector('.inputdrub3333 span');
var profit2 = document.querySelector('.inputdrub4 span');

 var value1111 = document.querySelector('.inputdrub111 span');
 var value2222 = document.querySelector('.inputdrub222 span');    
 var value3333 = document.querySelector('.inputdrub333 span');
 var value4444 = document.querySelector('.inputdrub444 span');    


  btn.addEventListener('click', () => {	

  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
 
   var targetUrl = 'https://api.binance.com/api/v1/depth?symbol=ETHUPUSDT'; 
// targetUrl2=targetUrl2.replace(/[^\=]*$/,'PZM/BTC');    
    

 var targetUrl2 = 'https://api.binance.com/api/v1/depth?symbol=ETHDOWNUSDT';
	//	targetUrl=targetUrl.replace(/[^\/]+(?=\/$)/,'BTC_USD');





let resUrl = proxyUrl + targetUrl;
let resUrl2 = proxyUrl + targetUrl2;

console.log();

 
  
    
    
    fetch(resUrl)
   .then(res => {
      res.json().then(body => {
     divBuy.innerHTML = parseFloat(body.bids[0][0]).toFixed(5);
      divSell.innerHTML = parseFloat(body.asks[0][0]).toFixed(5);
   currentPrice_BuyCOIN_USD = body.bids[0][0];
     currentPrice_SellCOIN_USD = body.asks[0][0];
     
   
     });
  })
 // .catch(err => console.log(err));
      
      
  
  fetch(resUrl2)
   .then(res => {
      res.json().then(body => {
     divBuy2.innerHTML = parseFloat(body.bids[0][0]).toFixed(5);
      divSell2.innerHTML = parseFloat(body.asks[0][0]).toFixed(5);
          
     currentPrice_BuyCOIN_USD_livecoin = body.bids[0][0];
       currentPrice_SellCOIN_USD_livecoin = body.asks[0][0];
        
  });
  })
  //.catch(err => console.log(err)); 
 
  //  if(1 > 0 && $('#1min_transaction11_notificator123123').prop('checked'))beep1(); 
 if(1 > 0)    
    {
      (beep1()); 
      };
 });    

      

function beep1() {
       setTimeout(() => {  
         
   var value11 = (((currentPrice_BuyCOIN_USD*100)/currentPrice_SellCOIN_USD)-100).toFixed(2);   
       value1.innerHTML = value11;     
  var value22 = (((currentPrice_BuyCOIN_USD_livecoin*100)/currentPrice_SellCOIN_USD_livecoin)-100).toFixed(2);   
      value2.innerHTML = value22;        
   
    var value11tt = (currentPrice_BuyCOIN_USD_livecoin*1)-(currentPrice_BuyCOIN_USD*1).toFixed(3);   
       value1tt.innerHTML = value11tt;   
   var value22tt = (currentPrice_SellCOIN_USD_livecoin*1)-(currentPrice_SellCOIN_USD*1).toFixed(3);   
       value2tt.innerHTML = value22tt;  
    
    
    
    
    var min_transactionss111 = $('#min_transactionss111').val();
var min_transactionss222 = $('#min_transactionss222').val();    
var min_transactionss333 = $('#min_transactionss333').val();    
var min_transactionss444 = $('#min_transactionss444').val();    
    
    
var value111 = (((currentPrice_SellCOIN_USD*100)/min_transactionss111)-100).toFixed(2);   
      value1111.innerHTML = value111;     
var value222 = (((currentPrice_BuyCOIN_USD*100)/min_transactionss222)-100).toFixed(2);   
      value2222.innerHTML = value222;        
var value333 = (((currentPrice_SellCOIN_USD_livecoin*100)/min_transactionss333)-100).toFixed(2);   
      value3333.innerHTML = value333;     
var value444 = (((currentPrice_BuyCOIN_USD_livecoin*100)/min_transactionss444)-100).toFixed(2);   
      value4444.innerHTML = value444;        
 //   currentPrice_SellCOIN_USD 
         //  currentPrice_BuyCOIN_USD
  //  currentPrice_SellCOIN_USD_livecoin
 
 //   currentPrice_BuyCOIN_USD_livecoin
    
  var value33 = ((((currentPrice_SellCOIN_USD*100)/min_transactionss111)-100) + (((currentPrice_BuyCOIN_USD_livecoin*100)/min_transactionss333)-100)).toFixed(2);   
       profit1.innerHTML = value33;    
         
         
  var value33333 = ((((currentPrice_BuyCOIN_USD*100)/min_transactionss111)-100) + (((currentPrice_SellCOIN_USD_livecoin*100)/min_transactionss333)-100)).toFixed(2);   
       profit333.innerHTML = value33333;          
         
         
         
  var value44 = ((((currentPrice_BuyCOIN_USD*100)/min_transactionss222)-100) + (((currentPrice_BuyCOIN_USD_livecoin*100)/min_transactionss444)-100)).toFixed(2);   profit2.innerHTML = value44;    
    
    
    
  // if(btcalpha > 0 && $('#btcalphalivecoin_notificator').prop('checked'))beep();
        
      //  console.log(body);
    //  });
 //})
 //.catch(err => console.log(err)); 


    
var min_transactionss1 = $('#min_transaction1').val();  
if(currentPrice_BuyCOIN_USD > min_transactionss1 && $('#min_transaction11_notificator').prop('checked'))beep3();	
        
var min_transactionss2 = $('#min_transaction2').val();	      
if(currentPrice_SellCOIN_USD > min_transactionss2 && $('#min_transaction22_notificator').prop('checked'))beep3();   

var min_transactionss3 = $('#min_transaction3').val();	      
if(currentPrice_BuyCOIN_USD_livecoin > min_transactionss3 && $('#min_transaction33_notificator').prop('checked'))beep3();	

var min_transactionss4 = $('#min_transaction4').val();	      
if(currentPrice_SellCOIN_USD_livecoin > min_transactionss4 && $('#min_transaction44_notificator').prop('checked'))beep3();  

  
         
         
 var min1_transaction1 = $('#1min_transaction1').val();	      
if(((((currentPrice_SellCOIN_USD*100)/min_transactionss111)-100) + (((currentPrice_BuyCOIN_USD_livecoin*100)/min_transactionss333)-100)) > min1_transaction1 && $('#1min_transaction11_notificator').prop('checked'))beep2();	
         

 var min1_transaction1333 = $('#1min_transaction1333').val();	      
if(((((currentPrice_BuyCOIN_USD*100)/min_transactionss111)-100) + (((currentPrice_SellCOIN_USD_livecoin*100)/min_transactionss333)-100)) > min1_transaction1 && $('#1min_transaction11333_notificator').prop('checked'))beep2();	         
         
         
         
var min2_transaction2 = $('#2min_transaction2').val();	      
if(((((currentPrice_BuyCOIN_USD*100)/min_transactionss222)-100) + (((currentPrice_BuyCOIN_USD_livecoin*100)/min_transactionss444)-100)) > min2_transaction2 && $('#2min_transaction11_notificator').prop('checked'))beep2();    
 

         
 
var pokypka = $('#11min_transaction11').val();	      
if(value11tt > pokypka && $('#pokypka').prop('checked'))beep2();	         
         
 
 var prodaem = $('#22min_transaction22').val();	      
if(value11tt < prodaem && $('#prodaem').prop('checked'))beep3();	        
         
         
var Status_pokypki = document.querySelector('#Status_pokypki');

 //if(pokypka > 0) {    
 if(value11tt > pokypka) { 
           Status_pokypki.innerHTML = ('ПОКУПАЕМ');
      Status_pokypki.style.color = "#008000";
//}
   }      
	else {
	     Status_pokypki.innerHTML = ('ОЖИДАЮ');
             Status_pokypki.style.color = "#FFFF00";
      } 	           
         
         
         
         
         
var Status_prodano = document.querySelector('#Status_prodano');

//if(prodaem > 0) {     
 if(value11tt < prodaem) { 
           Status_prodano.innerHTML = ('ПРОДАЕМ');
      Status_prodano.style.color = "#f00";
//}
 }        
	else {
    
	     Status_prodano.innerHTML = ('ОЖИДАЮ');
             Status_prodano.style.color = "#FFFF00";
      } 	  
         
         
         
         
 }, 3000);

}; 



    
function beep() {
	(new Audio("https://raw.githubusercontent.com/ketlller/ketlller.github.io/master/beep.wav")).play();
	};      

function beep2() {
	(new Audio("https://raw.githubusercontent.com/ketlller/audio/main/02073.wav")).play();
	};   

function beep3() {
	(new Audio("https://raw.githubusercontent.com/ketlller/audio/main/03493.wav")).play();
	};   