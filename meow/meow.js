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

            },
            animate:function(direction,speed,stop){
              //TODO: Need to figure out a way to chain several animations together
              // var extend = function(obj){
              //   var args = Array.prototype.slice.call(arguments,1);
              //   args.forEach(function(object){
              //     for(var key in object ){
              //        obj[key]=object[key];
              //     }
              //   })
              //   return obj;
              // }
              var directionMapper = {
                'right':'left',
                'left':'left',
                'down':'top',
                'up':'top'
              };
              var counter = 0;

              var move = function(){
                if(direction==='right' || direction==='down'){
                  counter++
                }else if(direction==='left' || direction==='up'){
                  counter--
                }
                if(this.params[0]==='#'){
                  document.getElementById(this.params.slice(1)).style.position = 'relative';
                  document.getElementById(this.params.slice(1)).style[directionMapper[direction]] = counter+'px'
                  if(counter===stop){
                    clearInterval(timeId)
                  }
                }else if(this.params[0]==='.'){
                  document.getElementsByClassName(this.params.slice(1))[0].style.position = 'relative';
                  document.getElementsByClassName(this.params.slice(1))[0].style[directionMapper[direction]] = counter+'px';
                  if(counter===stop){
                    clearInterval(timeId)
                  }
                }else{
                  for(var i=0; i<document.getElementsByTagName(this.params).length; i++){
                    document.getElementsByTagName(this.params)[i].style.position = 'relative';
                    document.getElementsByTagName(this.params)[i].style[directionMapper[direction]] = counter+'px'
                  }
                  if(counter===stop){
                    clearInterval(timeId)
                  }
                }
              }
              timeId = setInterval(move.bind(this),speed)
              return this
            },
            fadeOut:function(speed){
              var counter=1; 
              var fadeInCallback = function(){
                counter=counter-0.1
                if(this.params[0]==='#'){
                  document.getElementById(this.params.slice(1)).style.opacity = Number(counter);
                  if(counter<0){
                    clearInterval(timeId)
                  }
                }else if(this.params[0]==='.'){
                  document.getElementsByClassName(this.params.slice(1))[0].style.opacity = 'relative';
                  if(counter<0){
                    clearInterval(timeId)
                  }
                }else{
                  for(var i=0; i<document.getElementsByTagName(this.params).length; i++){
                    document.getElementsByTagName(this.params)[i].style.opacity = counter;
                  }
                  if(counter<0){
                    clearInterval(timeId)
                  }
                }
              }
              timeId = setInterval(fadeInCallback.bind(this),speed)
              return this
          },
          fadeIn:function(speed){
            var counter=0; 
            var fadeInCallback = function(){
              counter=counter+0.1
              if(this.params[0]==='#'){
                document.getElementById(this.params.slice(1)).style.opacity = Number(counter);
                if(counter>1){
                  clearInterval(timeId)
                }
              }else if(this.params[0]==='.'){
                document.getElementsByClassName(this.params.slice(1))[0].style.opacity = 'relative';
                if(counter>1){
                  clearInterval(timeId)
                }
              }else{
                for(var i=0; i<document.getElementsByTagName(this.params).length; i++){
                  document.getElementsByTagName(this.params)[i].style.opacity = counter;
                }
                if(counter>1){
                  clearInterval(timeId)
                }
              }
            }
            timeId = setInterval(fadeInCallback.bind(this),speed)
            return this

          }
        }
      
      //extend function:

   
      // Assign our M object to global window object.
      if(!window.M) {
          window.M = M;
      }
      
})(window)