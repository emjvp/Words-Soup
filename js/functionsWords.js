

function addWords( word, wordArr ) {

    if ( word.lenght > SOUPSIZE && wordArr.length === SOUPSIZE){ 
        
        return; 
    }
    
    wordArr.push(word);
    console.log(wordArr);
    
    
    return wordArr;
    
}

function listWords( wordArr, listHtml ) { // recibe el arreglo de las palabras y el elemento html que va a renderizar las palabras
    let list = document.getElementById('wordList');
    let node;
    let textNode;
    if(list.hasChildNodes())
    {
        while( list.childNodes.length >= 1){
            list.removeChild(list.firstChild);
        }
    }
    
   wordArr.forEach( 
    element => {
       node = document.createElement('LI');
       textNode = document.createTextNode(element);
       node.appendChild(textNode);
       listHtml.appendChild(node);       
    }
   );
       
}





function chargeWords(wordsArr) { 
        
    let currWord = '';
    
    
    

              
        
    
        
    return lettersMat;
}


