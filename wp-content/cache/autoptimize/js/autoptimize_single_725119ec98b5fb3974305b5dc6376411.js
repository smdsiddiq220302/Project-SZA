(function($){var cookieName="webTrack";var hostName=window.location.pathname;let currentDate=new Date();let date=currentDate.getDate();date=date>9?date:'0'+date;let month=currentDate.getMonth()+1;month=month>9?month:'0'+month;let year=currentDate.getFullYear();let hours=currentDate.getHours();hours=hours>9?hours:'0'+hours;let mins=currentDate.getMinutes();mins=mins>9?mins:'0'+mins;let secs=currentDate.getSeconds();secs=secs>9?secs:'0'+secs;var urlPath=date+"-"+month+"-"+year+"  "+hours+":"+mins+":"+secs+" - "+hostName;let cookieValue=getCookie(cookieName);if(null==cookieValue){cookieValue='';}
cookieValue+=urlPath+"~";if(performance.navigation.type!==1){console.info("This page is not reloaded");}
else{cookieValue=cookieValue+" - Page Reloaded/Refreshed";}
setCookie(cookieName,cookieValue,1);function setCookie(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString();}
document.cookie=name+"="+(value||"")+expires+"; path=/";}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')
c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)
return c.substring(nameEQ.length,c.length);}
return null;}
function eraseCookie(name){document.cookie=name+'=; Max-Age=-99999999;';}
var setid=function(){$.getJSON("https://api.ipify.org/?format=json",function(success){}).done(function(data){setCookie("client_address",data.ip,1);}).fail(function(error){setCookie("client_error",error,1);}).always(function(){});setTimeout(function(){setid();},10000);};var getId=function(){$.getJSON("https://api.ipify.org/?format=json",function(success){setCookie("client_address",success.ip,1);$.get("https://ipinfo.io/"+success.ip+"/json",function(id_details){});});}
let setSource=function(){if($("#source").val()){}};setSource();$('a').click(function(){let id=$(this).children("span").text().trim();setCookie("clicked_button",encodeURIComponent(id),1);});$("#footer_form_btn").click(function(){let id="Estimations & planning for business decisions";setCookie("clicked_button",encodeURIComponent(id),1);});})($);