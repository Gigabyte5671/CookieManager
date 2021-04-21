# CookieManager

<p align="center"><img width="96" src="https://img.icons8.com/color/96/000000/cookies.png"></p>

cookieManager.js
========

#### Simple JavaScript Cookie Manager ####

An incredibly simple and lightweight library for adding, fetching, modifying, and removing browser cookies.

### Usage ###

To create a cookie, call the setCookie() function with arguments for the cookie name, the value, and the lifespan (in days).

```javascript
setCookie(cookieName, cookieValue, cookieLifespan);
```

To retrieve the value of a cookie, call the getCookie() function with an argument for the cookie name. This will return the value of the cookie as a string.

```javascript
var cookieValue = getCookie(cookieName);
```

To check if a cookie exists, call the checkCookie() function with an argument for the cookie name. This will return boolean true if the cookie exists, and boolean false if it doesn't. 
(This is faster than getCookie if you don't need to know what's actually in the cookie)

```javascript
var cookieExists = checkCookie(cookieName);
```

Finally, to remove a cookie, call the clearCookie() function with an argument for the cookie name.

```javascript
clearCookie(cookieName);
```


### Other ###

<a href="https://icons8.com/icon/12878/cookies">Cookies icon by Icons8</a>
