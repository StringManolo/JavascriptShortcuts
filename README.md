# JavascriptShortcuts
Set of functions made to heavily increase development speed. 


## BASIC:  

### $()  
Select an element from the document or other element.  
```
let myButton = $("#myButton");
let myScriptSrc = $("#myDiv", "script").src;
```

### $$()
Select all elements from the document or other element.
```
let links = $$("a");
let myHeaders = $$("body", "header");
```

### \_() 
Same as alert. 
```
_(5 + 3);
```

### \_\_()
Same as console.log().
```
__("Hello!");
```

### make()
Create an element and return it. You can also change properties.
```
let myButton = make("button", { innerHTML: "Click me!", className: "myButtons" });
let myDiv = make("div");
```

### ael()
Add event listener to element. Click event used if omited.
```
let myButton = make("button", {innerHTML: "LOGIN"});
ael(myButton, e => alert("Welcome to login!"));
ael(myButton, "click", () => location = "/login.html");
```

### add()
Append child element to parent. Using body when omited.
```
add(head, myScript);
add(myDiv);
```

### rand()
Typical Math.floor(Math.random() * X +1) . 
```
let randomBetween0And1000 = rand(1000);
```

### css()
Add the css to head element.
```
css(`
body {
  margin: 0;
  background-color: snow;
}
`);
```


## ADVANCED: 
All functions are returning the most common element. You can exploit it into method chaining, embeed and recursive functions calls. 
You can avoid save references to elements you're going to use only few times. Is easy to build big oneliners to simplify code.

### Examples: 
Create button, set innerText to click me and id to myButton, add click event listener to alert message and append it to div: 
Vanilla js: 
```
let button = document.createElement("button");
button.innerText = "Click Me Please!";
button.id = "myButton";
button.addEventListener("click", () => alert("Nice click!"));
let myDiv = document.querySelector("#myDiv");
myDiv.appendChild(button);
```

Shortcuted js:
```
add($("#myDiv"), ael(make("button",{ innerText: "Click Me Please!", id: "myButton"}), () => _("Nice click!")));
```

245 characters vs 112 characters.
