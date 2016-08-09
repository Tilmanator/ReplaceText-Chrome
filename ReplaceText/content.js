// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if( request.message == "clicked_browser_action" ) {
      var words = request.check;
      words = words.split(",");   // Convert to array of strings   
      var elements = document.getElementsByTagName('*');

      for(var i=0; i<elements.length;i++){  //Search through all elements and their subsections
        var element = elements[i];
  
        for(var j=0;j<element.childNodes.length;j++){
          var node = element.childNodes[j];
          if(node.nodeType==3){   //text
            var text = node.nodeValue;
            if(!request.caseSensitive){ //Case-sensitivity check
              text=text.toLowerCase();}

            var replacetext=text;

            for(var k=0;k<words.length;k+=2){
              replacetext = replacetext.replace(words[k], words[k+1]);
            }

            if(replacetext!=text){
                 element.replaceChild(document.createTextNode(replacetext),node);
            }
          }
        }
      }
    }
  }
);
