<p align="center"><img width="96" src="https://img.icons8.com/color/96/000000/cookies.png" draggable="false"></p>

CookieManager.js
========

#### JavaScript Cookie Manager ####
[Demo](https://cookie-manager.zakweb.dev/)

An incredibly simple and lightweight library for creating, reading, updating, and deleting browser cookies.
  

### Usage ###

Include:

```html
<script src="https://gigabyte5671.github.io/CookieManager/cookieManager.min.js" type="text/javascript"></script>
```
Or download the zip from the releases page.  
  
To create a cookie, call the setCookie() function with arguments for the cookie name, the value, and the lifespan (in days).  
(To update a cookie, just call setCookie() again with the same name and the new value)

```javascript
setCookie(cookieName, cookieValue, cookieLifespan);
```

To retrieve the value of a cookie, call the getCookie() function with an argument for the cookie name. This will return the value of the cookie as a string.

```javascript
var cookieValue = getCookie(cookieName);
```

To check if a cookie exists, call the checkCookie() function with an argument for the cookie name. This will return boolean true if the cookie exists, and boolean false if it doesn't.  
(This function is faster than getCookie if you don't need to know the cookie's value)

```javascript
var cookieExists = checkCookie(cookieName);
```

Finally, to remove a cookie, call the clearCookie() function with an argument for the cookie name.

```javascript
clearCookie(cookieName);
```
  
*Note: Most browsers enforce a maximum size of 4096 bytes per cookie. Attempting to set or update a cookie with a value larger than that will fail without returning an error.*
  
### Other ###

[Cookies icon by Icons8](https://icons8.com/icon/12878/cookies)
