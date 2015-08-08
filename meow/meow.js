(function(window){
  var M = function (params) {
          return new Library(params);
      };
       
      // In our Library we get our selector with querySelectorAll (we do not support < ie8)
      // We also add selector length, version and twitter/github or whatever you like as information about your library.
      var Library = function (params) {
          // Get params
          this.selector = document.querySelectorAll(params);
          this.params = params;
           
          // Return as object
          return this;        
      };
      M.fn = Library.prototype = {
             /**
              * Hide element(s) from DOM
              * @returns {*}
              */
             hide: function () {
                 var len = this.selector.length;
                 // Here we simply loop through our object (this) and set the css to display none. 
                 //If you got more that 1 node from DOM selected with querySelectorAll, you would hide them all.
                 while (len--) {
                     this.selector[len].style.display = 'none';
                 }
      
                 // It's important to return this if you want to chain methods!
                 return this;
             },
      
             /**
              * Show element(s) from DOM
              * @returns {*}
              */
             show: function () {
                 var len = this.selector.length;
                 while (len--) {
                     this.selector[len].style.display = 'block';
                 }
      
                 return this;
             },
            append: function(input){
            	if(this.params[0]==='#'){
            		document.getElementById(this.params.slice(1)).innerHTML += input;
            	}else if(this.params[0]==='.'){
            		var getClass = document.getElementsByClassName(this.params.slice(1))[0].innerHTML
            	     if(!getClass){
            	       document.getElementsByClassName(this.params.slice(1))[0].innerHTML=input;
            	     }else{
            		   document.getElementsByClassName(this.params.slice(1))[0].innerHTML+=input;
            	     }
            	}else{
            		document.getElementsByTagName(this.params)[0].innerHTML += input;
            	}
            	return this;
            },
            bgColor:function(input){
            	if(this.params[0]==='#'){
            		document.getElementById(this.params.slice(1)).style.backgroundColor=input
            	}else if(this.params[0]==='.'){
            		document.getElementsByClassName(this.params.slice(1))[0].style.backgroundColor=input
            	}else{
            		document.getElementsByTagName(this.params)[0].style.backgroundColor=input
            	}
            	return this;
            },
            border:function(input){
              if(this.params[0]==='#'){
                document.getElementById(this.params.slice(1)).style.border=input
              }else if(this.params[0]==='.'){
                document.getElementsByClassName(this.params.slice(1))[0].style.border=input
              }else{
                document.getElementsByTagName(this.params)[0].style.border=input
              }
              return this;

            }    
         };
      
   
      // Assign our M object to global window object.
      if(!window.M) {
          window.M = M;
      }
      
})(window)