/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
function date_time_auto_sync(){
document.getElementById('timer').innerHTML =
	  05 + ":" + 01;
	startTimer();

	function startTimer() {
	  var presentTime = document.getElementById('timer').innerHTML;
	  var timeArray = presentTime.split(/[:]+/);
	  var m = timeArray[0];
	  var s = checkSecond((timeArray[1] - 1));
	  if(s==59){m=m-1}
	  if(m<0)
	  {
		  m=4;//min clock reset
		  s=59;//sec clock reset
		  //console.log('5 mins timer completed')
		}
	  
	  document.getElementById('timer').innerHTML =
	    m + ":" + s;
	  setTimeout(startTimer, 1000);
	}

	function checkSecond(sec) {
	  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
	  if (sec < 0) {sec = "59"};
	  return sec;
	}
}
/*---------------------------------------------------------------------------------*/



 /*---------------------------------------------------------------------------------*/  

/*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'mkt_open_status',
        	success: function(result){
        		var json = $.parseJSON(result);
        		if(json.NormalMktStatus=="open")
        			text="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>Normal Market is Open</span>";
        		else 
        			text = "<span class='blinking1' style='color: #CC0000; font-weight: bold; font-size: 14px;'>Normal Market has Closed</span>";
        		
            $("#mktStatus").html(text);
        	
        }
        })

/*---------------------------------------------------------------------------------*/

<!-- begins get nifty and bank nifty data -->
/*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'indices',
        	success: function(result){
        		var json = result;
        		var nifty=json.data[1].lastPrice;
        		var niftyChange=json.data[1].change;
        		var niftyPChange=json.data[1].pChange;
        		
        			if(niftyChange>0){
        				text="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>" + nifty + "</span>" +
        				 "<span style='color: #00c853;font-size: 14px;' class='glyphicon glyphicon-triangle-top'></span>";
        				text1="<span  style='color: #00c853; font-weight: bold; font-size: 14px;'>" + niftyChange + "</span>";
        			}
        			else{
        				text="<span class='blinking1' style='color: #ff4444; font-weight: bold; font-size: 14px;'>" + nifty + "</span>" + 
        				"<span style='color: #ff4444;font-size: 14px;' class='glyphicon glyphicon-triangle-bottom'></span>";
        				text1="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + niftyChange + "</span>";
        			}
        			
        			if(niftyPChange>0){
        				text2="<span style='color: #00c853; font-weight: bold; font-size: 14px;'>" + niftyPChange + "%</span>";
        			}
        			else{
        				text2="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + niftyPChange + "%</span>";
        			}
        			
        			var banknifty=json.data[4].lastPrice;
           			var bankniftyChange=json.data[4].change;
           			var bankniftyPChange=json.data[4].pChange;
           			
            			
            			if(bankniftyChange>0){
            				text3="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>" + banknifty + "</span>" + 
            				"<span style='color: #00c853;font-size: 14px;' class='glyphicon glyphicon-triangle-top'></span>";
            				text4="<span  style='color: #00c853; font-weight: bold; font-size: 14px;'>" + bankniftyChange + "</span>";
            			}
            			else{
            				text3="<span class='blinking1' style='color: #ff4444; font-weight: bold; font-size: 14px;'>" + banknifty + "</span>" + 
            				"<span style='color: #ff4444;font-size: 14px;' class='glyphicon glyphicon-triangle-bottom'></span>";
            				text4="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + bankniftyChange + "</span>";
            			}
            			
            			if(bankniftyPChange>0){
            				text5="<span style='color: #00c853; font-weight: bold; font-size: 14px;'>" + bankniftyPChange + "%</span>";
            			}
            			else{
            				text5="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + bankniftyPChange + "%</span>";
            			}
        		
            $("#niftyPrice").html(text);
            $("#niftyPriceChange").html(text1);
            $("#niftyPriceChangePercentage").html(text2);
            
            
            $("#bankNiftyPrice").html(text3);
            $("#bankNiftyPriceChange").html(text4);
            $("#bankNiftyPriceChangePercentage").html(text5);
        	
        }
        })

/*---------------------------------------------------------------------------------*/
        <!-- begins get nifty and bank nifty data -->
        
        
        <!-- begins get curreny  and dollar index data -->
        /*---------------------------------------------------------------------------------*/
                $.ajax({
                	type:'Get',
                	url: 'currency/dollar_index_brent_usd_inr',
                	success: function(result){
                		var json = result;
                		var BrentOilName=json.data[0].index;
                		var BrentOilltp=json.data[0].ltp;
                		var BrentOilChange=json.data[0].change;
                		var BrentOilchangePercentage=json.data[0].changePercentage;
                		
                			text0="<span style='color: #9c27b0; font-weight: bold; font-size: 16px;'>" +BrentOilName+"</span>";
                			if(BrentOilChange>0){
                				text="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>" + BrentOilltp + "</span>" +
                				 "<span style='color: #00c853;font-size: 14px;' class='glyphicon glyphicon-triangle-top'></span>";
                				text1="<span  style='color: #00c853; font-weight: bold; font-size: 14px;'>" + BrentOilChange + "</span>";
                			}
                			else{
                				text="<span class='blinking1' style='color: #ff4444; font-weight: bold; font-size: 14px;'>" + BrentOilltp + "</span>" + 
                				"<span style='color: #ff4444;font-size: 14px;' class='glyphicon glyphicon-triangle-bottom'></span>";
                				text1="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + BrentOilChange + "</span>";
                			}
                			
                			BrentOilchangePercentage=BrentOilchangePercentage.toString().substring(0,5);
                			if(BrentOilchangePercentage>0){
                				text2="<span style='color: #00c853; font-weight: bold; font-size: 14px;'>" + BrentOilchangePercentage + "%</span>";
                			}
                			else{
                				text2="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + BrentOilchangePercentage + "%</span>";
                			}
                			
                			var USDINRName=json.data[1].index;
                			var USDINR=json.data[1].ltp;
                   			var USDINRChange=json.data[1].change;
                   			var USDINRchangePercentage=json.data[1].changePercentage;
                   			
                   				text10="<span style='color: #9c27b0; font-weight: bold; font-size: 16px;'>" +USDINRName+"</span>";
                    			if(USDINRChange>0){
                    				text3="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>" + USDINR + "</span>" + 
                    				"<span style='color: #00c853;font-size: 14px;' class='glyphicon glyphicon-triangle-top'></span>";
                    				text4="<span  style='color: #00c853; font-weight: bold; font-size: 14px;'>" + USDINRChange + "</span>";
                    			}
                    			else{
                    				text3="<span class='blinking1' style='color: #ff4444; font-weight: bold; font-size: 14px;'>" + USDINR + "</span>" + 
                    				"<span style='color: #ff4444;font-size: 14px;' class='glyphicon glyphicon-triangle-bottom'></span>";
                    				text4="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + USDINRChange + "</span>";
                    			}
                    			
                    			USDINRchangePercentage=USDINRchangePercentage.toString().substring(0,5);
                    			if(USDINRchangePercentage>0){
                    				text5="<span style='color: #00c853; font-weight: bold; font-size: 14px;'>" + USDINRchangePercentage + "%</span>";
                    			}
                    			else{
                    				text5="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + USDINRchangePercentage + "%</span>";
                    			}
                    
                    $("#BrentOilName").html(text0);	
                    $("#BrentOilPrice").html(text);
                    $("#BrentOilPriceChange").html(text1);
                    $("#BrentOilChangePercentage").html(text2);
                    
                    $("#USDINRName").html(text10);	
                    $("#USDINR").html(text3);
                    $("#USDINRChange").html(text4);
                    $("#USDINRchangePercentage").html(text5);
                	
                }
                })

        /*---------------------------------------------------------------------------------*/
        <!-- end get curreny  and dollar index data -->
        
        
        
        
        
        

/*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'next_trading_date',
        	success: function(result){
        			text="<span style='color: #33b5e5; font-weight: bold; font-size: 12px;'>"+result+"</span>";
           			 $("#nextTradingDate").html(text);
        	
        }
        })

/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'currency/intraday_usd_inr_live',
        	success: function(result){
        		var ltp = result.ltp;
        		var expiryDate=result.expiryDate;
        		var changeValue=result.change;
        		var changePercentage=result.changePercentage;
        		var date=result.todayDate;
        		var currencyTrend="";
       			 expiryDate="<span style='color: #0d47a1; font-weight: bold; font-size: 14px;'>" + expiryDate + "</span>";
    			 priceDate="<span style='color: #0d47a1; font-weight: bold; font-size: 14px;'>" + date + "</span>";
    			 
        		if(changeValue>=0){
        			currencyTrend="Positive";
        			latestPrice="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>" + ltp + "</span>" + 
    				"<span style='color: #00c853;font-size: 16px;' class='glyphicon glyphicon-triangle-top'></span>";
        			currencyTrendText="<span class='blinking2' style='color: green; font-weight: bold; font-size: 14px;'>" +currencyTrend+ "</span>";
        			changeValueHtml="<span style='color: green; font-weight: bold; font-size: 14px;'>" + changeValue + "</span>";
        			changePercentageHtml="<span style='color: green; font-weight: bold; font-size: 14px;'>" + changePercentage + "%</span>";
        		}else
        		{
        			currencyTrend="Negative";
        			latestPrice="<span class='blinking1' style='color: #ff4444; font-weight: bold; font-size: 14px;'>" + ltp + "</span>" + 
    				"<span style='color: #ff4444;font-size: 16px;' class='glyphicon glyphicon-triangle-bottom'></span>";
        			currencyTrendText="<span class='blinking2' style='color: red; font-weight: bold; font-size: 14px;'>" +currencyTrend+ "</span>";
        			changeValueHtml="<span style='color: red; font-weight: bold; font-size: 14px;'>" + changeValue + "</span>";
        			changePercentageHtml="<span style='color: red; font-weight: bold; font-size: 14px;'>" + changePercentage + "%</span>";
        		}
        		
        		

        			
          		$("#currencyLtp").html(latestPrice);
          		$("#currencyPriceDate").html(priceDate);
          		$("#currencyExpiryDate").html(expiryDate); 
          		$("#currencyChangeValue").html(changeValueHtml); 
          		$("#currencyChangePercentage").html(changePercentageHtml);
          		$("#currencyTrend").html(currencyTrendText);
        	
        }
        })

/*---------------------------------------------------------------------------------*/

         <!-- begins world index data -->
        /*---------------------------------------------------------------------------------*/
                $.ajax({
                	type:'Get',
                	url: 'world_market_indices',
                	success: function(result){
                		var json = result;
                		var dow30Name=json.data[0].index;
                		var dow30ltp=json.data[0].ltp;
                		var dow30Change=json.data[0].chg;
                		var dow30changePercentage=json.data[0].chgPer;
                		
                			text0="<span style='color: #9c27b0; font-weight: bold; font-size: 16px;'>" +dow30Name+"</span>";
                			if(dow30Change>0){
                				text="<span class='blinking1' style='color: #00c853; font-weight: bold; font-size: 14px;'>" + dow30ltp + "</span>" +
                				 "<span style='color: #00c853;font-size: 14px;' class='glyphicon glyphicon-triangle-top'></span>";
                				text1="<span  style='color: #00c853; font-weight: bold; font-size: 14px;'>" + dow30Change + "</span>";
                			}
                			else{
                				text="<span class='blinking1' style='color: #ff4444; font-weight: bold; font-size: 14px;'>" + dow30ltp + "</span>" + 
                				"<span style='color: #ff4444;font-size: 14px;' class='glyphicon glyphicon-triangle-bottom'></span>";
                				text1="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + dow30Change + "</span>";
                			}
                			
                			dow30changePercentage=dow30changePercentage.toString().substring(0,5);
                			if(dow30changePercentage>0){
                				text2="<span style='color: #00c853; font-weight: bold; font-size: 14px;'>" + dow30changePercentage + "%</span>";
                			}
                			else{
                				text2="<span style='color: #CC0000; font-weight: bold; font-size: 14px;'>" + dow30changePercentage + "%</span>";
                			}
                			
                			
                    
                    $("#Dow30Name").html(text0);	
                    $("#Dow30Price").html(text);
                    $("#Dow30PriceChange").html(text1);
                    $("#Dow30ChangePercentage").html(text2);
                    
                	
                }
                })

        
         <!-- begins world index data -->
        
/*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'option_chain_reader',
        	success: function(result){
        		var json = result.pcrOI;
        		if(json>1)
        			text="<span class='blinking' style='color: #00c853; font-weight: bold; font-size: 18px;'>" +json+ "</span>";
        			else
        			text="<span class='blinking' style='color: #CC0000; font-weight: bold; font-size: 18px;'>" +json+ "</span>";
        			
          		 $("#OptionsNiftyPCR").html(text);
        	
        }
        })

/*---------------------------------------------------------------------------------*/

        
        /*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'suggestions/premium_discount_nifty_banknifty',
        	success: function(result){
        		var nifty = result.nifty.toString().substring(0,5);
        		var bankNifty = result.bankNifty.toString().substring(0,5);
        		if(nifty>=1)
        			text="<span class='nifty' style='color: #00c853; font-weight: bold; font-size: 14px;'>"  +nifty+ "</span>";
        			else
        			text="<span class='nifty' style='color: #CC0000; font-weight: bold; font-size: 14px;'>"  +nifty+  "</span>";
        		
        		if(bankNifty>=1)
        			text1="<span class='bankNifty' style='color: #00c853; font-weight: bold; font-size: 14px;'>" +bankNifty+ "</span>";
        			else
        			text1="<span class='bankNifty' style='color: #CC0000; font-weight: bold; font-size: 14px;'>" +bankNifty+ "</span>";
        		
          		 $("#niftyPreDis").html(text);
          		 $("#bankniftyPreDis").html(text1);
        	
        }
        })

/*---------------------------------------------------------------------------------*/
        
/*---------------------------------------------------------------------------------*/
        $.ajax({
        	type:'Get',
        	url: 'indices',
        	success: function(result){
        		var lastPrice = result.data[5].lastPrice;
        		var pChange=result.data[5].pChange;
        		if(pChange>=0.0){
        			plain="<span style='color: #FF8800; font-weight: bold; font-size: 16px;'>" +lastPrice+ "</span>";
       				text="<span  style='color: #FF8800; font-weight: bold; font-size: 16px;'>" +lastPrice+ "</span>";
           			text1="<span  style='color: #00e676; font-weight: bold; font-size: 16px;'>" + pChange + "%</span>";
        			}
        			else{
        			plain="<span style='color: #00e676; font-weight: bold; font-size: 16px;'>" +lastPrice+ "</span>";
        			text="<span  style='color: #00e676; font-weight: bold; font-size: 16px;'>" +lastPrice+ "</span>";
        			text1="<span style='color: #FF8800; font-weight: bold; font-size: 16px;'>" + pChange + "%</span>";
        			}

        			
          		 $("#IndiaVix").html(text);
          		 $("#IndiaVixInfo").html(plain); 
          		 $("#IndiaVixPerChange").html(text1);
        	
        }
        })

/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/
function date_time(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    //var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function blinker() {
	$('.blinking').fadeOut(500);
	$('.blinking').fadeIn(500);
}
setInterval(blinker, 1000);

function blinker1() {
	$('.blinking1').fadeOut(700);
	$('.blinking1').fadeIn(700);
}
setInterval(blinker1, 900);

function blinker2() {
	$('.blinking2').fadeOut(800);
	$('.blinking2').fadeIn(800);
}
setInterval(blinker2, 1200);

/*---------------------------------------------------------------------------------*/
