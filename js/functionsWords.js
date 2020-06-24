

function addWords( word ) {
    const wordArr = []; // se define que es un arreglo

    if ( word.lenght > soupSize | word === ''){ 
        
        return; 
    }
    
    wordArr.push(word);
    console.log(wordArr);
    
    
    return wordArr;
    
}

function listWords( wordArr, listHtml ) { // recibe el arreglo de las palabras y el elemento html que va a renderizar las palabras

    let node;
    let textNode;

    
   wordArr.forEach( 
    element => {
       node = document.createElement('LI');
       textNode = document.createTextNode(element);
       node.appendChild(textNode);
       listHtml.appendChild(node);       
    }
   );
       
}





function chargeWords(wordArr, tableSoupHtml) { /*wordArr, tableSoupHtml, size*/ 
        
    
    let indx = 0;

    let lettersMat = Mat();
    let currWord = '';

    wordArr.forEach( element => {
        let col = Math.floor(Math.random() * SOUPSIZE);
        let row = Math.floor(Math.random() * SOUPSIZE);
        currWord = element.split('');        
        fillLines(col, row, lettersMat, currWord);            
        }
    );
        

}


