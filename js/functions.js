

function addWords( word ) {
    if ( words.lenght > size ){ 
        alert('La palabra excede la longitud permitida');
        return; }
    const wordArr = []; // se define que es un arreglo
    wordArr.push(words);
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
function drawSoup( tableSoupHtml, size ){
    let nodeTr;
    let nodeTd;
    let tableIndx = 1;
    for (let i = 0; i < size - 1; i++) {
        nodeTr = document.createElement('TR');
        tableSoupHtml.appendChild(nodeTr);        
        for (let j = 0; j < size - 1; j++){
            nodeTd = document.createElement('TD').setAttribute('id', tableIndx);
            tableSoupHtml.appendChild(nodeTd);                        
            
        }    
        
    }

    
        
}

function chargeWords( wordArr, tableSoupHtml, size ) {
    const node = document.createElement('TR');

    wordArr.forEach(
        element => {
            
        }
    );
}
