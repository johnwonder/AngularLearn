 function escape(ch) {
      return '\\\\\\' + ch;
    }


var startSymbol = '{{';
var endSymbol = '}}';
 var startSymbolLength = startSymbol.length,
        endSymbolLength = endSymbol.length,
          escapedStartRegexp = new RegExp(startSymbol.replace(/./g, escape), 'g'),
        escapedEndRegexp = new RegExp(endSymbol.replace(/./g, escape), 'g');
 var startIndex,
          endIndex,
          index = 0;
console.log(startSymbol.replace(/./g, escape));

function unescapeText(text) {
      return text.replace(escapedStartRegexp, startSymbol).
        replace(escapedEndRegexp, endSymbol);
    }

    var text ="{{d}}";

if (((startIndex = text.indexOf(startSymbol, index)) != -1) &&
             ((endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1)) {
          if (index !== startIndex) {
          	console.log(unescapeText(text.substring(index, startIndex)));
            //concat.push();
          }
          console.log(text.substring(startIndex + startSymbolLength, endIndex));
          //expressions.push(exp);
}

