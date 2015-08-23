function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  pattern = new RegExp('^'+pattern.replace(/\?/g, '.')+'$');
  console.log('pattern',pattern)
  return this.words.filter(pattern.test.bind(pattern));
}

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  // your task
  var tempResult =''
  var result = []
   this.words.forEach(function(words){
     if(pattern.length===words.length){
       for(var i=0; i<pattern.length; i++){
         if(pattern[i]==='?'){
           tempResult=tempResult+words[i]
         }else{
            tempResult=tempResult+pattern[i]
         }
       }
     }
     if(tempResult===words){
         result.push(tempResult)
         tempResult=''
     }
   })  
   return result  
}
