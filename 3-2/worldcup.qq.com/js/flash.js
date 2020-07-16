/*对象获取*/
	function $(objectId) {
  if(document.getElementById && document.getElementById(objectId)) {
// W3C DOM
return document.getElementById(objectId);
  } else if (document.all && document.all(objectId)) {
// MSIE 4 DOM
return document.all(objectId);
  } else if (document.layers && document.layers[objectId]) {
// NN 4 DOM.. note: this won't find nested layers
return document.layers[objectId];
  } else {
return false;
  }

}

/*浏览器类型获取*/
function getOs()
{ 
    var OsObject = ""; 
   if(navigator.userAgent.indexOf("MSIE")>0) { 
        return "MSIE"; 
   } 
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
        return "Firefox"; 
   } 
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
        return "Safari"; 
   } 
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){ 
        return "Camino"; 
   } 
   if(isMozilla=navigator.userAgent.indexOf("Gecko")>0){ 
        return "Gecko"; 
   } 
   
} /*  |xGv00|5b7035d83fe0735a16a6867029fefdaf */