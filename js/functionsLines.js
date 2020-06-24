function lineHVIsValid(currWord, Matriz, i, j, sense){ // validar lineas verticales y horizontales
    let isValid = false;
    if (sense === 1)
    {
        for( let k = j; k < currWord.length; k++ )
        { // igualo el valor de k que recibo en j para empezar desde la posicion inicial que tiene la palabra

            if ( Matriz[i, k] === undefined && k < SOUPSIZE )
            {
                isValid = true;
            }
            else if( k > SOUPSIZE )
            {
                return isValid = false;
            }
        }
    }
     else
    {

        for( let k = currWord.length; k > 0; k-- )
        { 
            // igualo el valor de k al length del currword para ir hacia atrás
            console.log(k);
            if ( Matriz[i, k] === undefined )
            {
                isValid = true;
            }
            
        }

    }
    
    return isValid;
}

function lineDIsValid(Mat, currWord, i, j, sense){    
    let k = 0;
    let l = 0;
    let isValid =  false;
    if(sense === 1){
        k = i;
        j = l;
        while(k < SOUPSIZE && Mat[k][l] === undefined && l < currWord.length ){
            
            isValid = true;
            k++; j++;
        }
    } 
    else
    {
        k = currWord.length;
        l = currWord.length;
        while(k > 0 && Mat[k][l] === undefined){
            
            isValid = true;
            k--; l--;
        }

    }
}
function fillLines( col, row, lettersMat, currWord){

    let directions = ['h', 'v', 'dl', 'dr'];
    let indx = Math.floor(Math.random() * 3);
    let direction = directions[indx];
    
    let sense = Math.floor(Math.random() * 1);
    let k = 0;
    let i = 0;
    if (direction === 'h' && lineHVIsValid( currWord, col, row, sense )) {
        i = row;
        if ( sense === 1){            
            for (k = col; k < currWord.length; k++) {
                lettersMat[i][k] = currWord[k];                
            }
        }
        else 
        {
            for (k = currWord.length; k > 0; k--) {
                lettersMat[i][k] = currWord[k];                
            }
        }
    } else if (direction === 'v' && lineHVIsValid( currWord, col, row, sense )) {        
        i = col;
        if ( sense === 1 ){
           
            for (k = row; k < currWord.length; k++) {
                lettersMat[i][k] = currWord[k];                
            }
        }
        else
        {
            for (k = currWord.length; k > 0; k--) {
                lettersMat[i][k] = currWord[k];                
            }
        }
    }else if (direction === 'd' && lineDIsValid(lettersMat, currWord, i, j, sense ) ){
        k = 0;
        i = 0;
        if(sense === 1 ){
            while(k < currWord.length && i < currWord.length){
                lettersMat[k][i] = currWord[i];
                k++; i++;
            }
        }else{
            k = currWord.length;
            i = currWord.length;
            while(k > 0  && i > 0 ){
                lettersMat[k][i] = currWord[i];
                k--; i--;
            }
        }
    }
    return lettersMat;
}