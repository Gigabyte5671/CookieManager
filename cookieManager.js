function setCookie(cookieName, cookieValue, cookieLifespan){
  var d = new Date();
  d.setTime(d.getTime() + (cookieLifespan * 24 * 60 * 60 * 1000)); //Set the cookie expiration time (cookieLifespan is in days)
  var expires = "expires=" + d.toUTCString() + ";";
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + "path=/;" + "SameSite=Strict;";
}

function getCookie(cookieName){
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(';'); //Split the site cookie string into an array
  for(var i = 0; i < cookieArray.length; i++){ //For every cookie in the site cookie string
    var cookie = cookieArray[i];
    while(cookie.charAt(0) == ' '){ //Remove the space from the start of the cookie name
      cookie = cookie.substring(1);
    }
    if(cookie.indexOf(name) == 0){
      return cookie.substring(name.length, cookie.length); //Return the value of the cookie
    }
  }
  return false; //Return false if there were no matching cookies
}

function checkCookie(cookieName){
  return document.cookie.includes(cookieName + "="); //Return true if the requested cookie name exists in the document
}

function clearCookie(cookieName){
  setCookie(cookieName, "", -1); //Cause the browser to remove the cookie by setting its date in the past.
}