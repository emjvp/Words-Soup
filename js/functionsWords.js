

function addWords( word, wordArr ) {

    if ( word.lenght > SOUPSIZE && wordArr.length === SOUPSIZE){ 
        
        return; 
    }
    
    wordArr.push(word);
    
    
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

    let Matriz = Mat(20);
    let wordsSplited = [];
    let i = 0;
    
    wordsArr.forEach(
        word => {
            wordsSplited.push(word.split(''));
        }
    );
    fillLines(wordsSplited, Matriz);
       //return lettersMat;
}




























            
 


function fillSpaces(Mat, size){

    const ALPHABEAT = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','U','V','W','X','Y','Z'];
    
    let indx = 0;

    let currLet = '';

    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++){
            if(Mat[i][j] === undefined) {
                indx = Math.floor(Math.random() * ALPHABEAT.length);
                currLet = ALPHABEAT[indx];
                Mat[i][j] = currLet;
            }
        }        
    }
    return Mat;

}

