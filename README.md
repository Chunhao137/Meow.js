# meow.js
meow.js is a javascript library that does DOM manipulations and cool animations 

why meow? Because I wanted to create my my own library and cats are cool!

Here is how to use it: 

HTML:
----------------------------
      <html>
        <head>
        <script src ="meow.js"></script>
        <script src ="script.js></script>
        </head>
        <body>
        </body>
      </html>
      
JavaScript:
----------------------------
    document.addEventListener("DOMContentLoaded", function(event) { 
        M('body').append('<h1>Hello Word </h1>');
        M('#myDiv').append('<h1>Meow Meow </h1>').bgColor('gray')
    });
