function lineHVIsValid(currWord, Matriz, row, col, sense)
{ // validar lineas verticales y horizontales
    
    
    console.log(`row: ${row}`);
    console.log(`col: ${col}`);

    let isValid = false;
    if (sense === 1)
    {
            for( col; col < currWord.length; col++ )
            { 
                
                if ( col < Matriz.length && ( Matriz[row][col] === null || Matriz[row][col] === undefined || Matriz[row][col] === '' ))
                {
                    

                    isValid = true;
                }
                else if( col > SOUPSIZE )
                {
                    return isValid = false;
                }
            }
        }
        else
        {
            //console.log(Matriz);   
            for( let k = currWord.length - 1 ; k >= 0; k-- )
            { 
                // igualo el valor de k al length del currword para ir hacia atrás
                if ( Matriz[row][k] === null || Matriz[row][k] === undefined || Matriz[row][k] === '' )
                {
                    isValid = true;
                }                
            }
        }

    return isValid;
}
    
    
function lineDIsValid( currWord, Mat, i, j, sense)
{ 
     
    let k = 0;
    let l = 0;
    let isValid =  false;
    if(sense === 1){
        k = i;
        l = j;
        while(k < SOUPSIZE && Mat[k][l] === undefined && l < currWord.length ){
            
            isValid = true;
            k++; j++;
        }
    } 
    else
    {
        k = currWord.length;
        l = currWord.length;
        while(k >= 0 && Mat[k][l] === undefined){
            
            isValid = true;
            k--; l--;
        }

    }
    return isValid;
}

function convertToPositives(row, col) {
    if(row < 0) 
    {
        row = row * -1;
    }
    if(col < 0)
    {
        col = col * -1;
    }
   return [row, col];
}
function fillLines( Words ){ // esto es para llenar la matriz de palabras
    Matriz = Mat(SOUPSIZE);
    
    console.table(Words);
    
    const directions = ['h', 'v', 'd'];
    let indx = Math.floor(Math.random() * 2);
    // let direction = directions[indx];

    let row = Math.floor(Math.random() * Matriz.length);
    let col = Math.floor(Math.random() * Matriz.length);

    row = convertToPositives(row, col)[0];
    col = convertToPositives(row, col)[1]

    console.log(`row ${row}`);
    console.log(`col ${col}`);

    

    
    // let sense = Math.floor(Math.random() * 1);
    // sense = convertToPositives(sense)[0];
    let direction = 'v';
    let sense = 1;
    
    if (direction === 'h' ) 
    {
        
        if ( sense === 1 )
        {
            for ( let cwIRow = 0; cwIRow < Words.length; cwIRow++) 
            {
                row = Math.floor(Math.random() * Matriz.length);
                col = Math.floor(Math.random() * Matriz.length);

                row = convertToPositives(row, col)[0];
                col = convertToPositives(row, col)[1];
                while(!lineHVIsValid(Words[cwIRow], Matriz, row, col, sense)){
                    row = Math.floor(Math.random() * Matriz.length);
                    col = Math.floor(Math.random() * Matriz.length);

                    row = convertToPositives(row, col)[0];
                    col = convertToPositives(row, col)[1];
                }

                for ( let cwICol = 0; cwICol < Words[cwIRow].length; cwICol++) 
                {

                    console.log(`row ${row}`);
                    console.log(`col ${col}`);
                    // console.log(`Matriz: ${Matriz}`);
                    
                    
                    Matriz[row][col] = Words[cwIRow][cwICol];
                    
                                       
                    col++;   
                }

               
            }      
            console.table(Matriz);
  
        }
        else 
        {
            console.table(Words);
            for ( let cwIRow = Words.length - 1; cwIRow >= 0; cwIRow--) 
            {
                row = Math.floor(Math.random() * Matriz.length);
                col = Math.floor(Math.random() * Matriz.length);

                row = convertToPositives(row, col)[0];
                col = convertToPositives(row, col)[1];
                while(!lineHVIsValid(Words[cwIRow], Matriz, row, col, sense)){
                    row = Math.floor(Math.random() * Matriz.length);
                    col = Math.floor(Math.random() * Matriz.length);

                    row = convertToPositives(row, col)[0];
                    col = convertToPositives(row, col)[1];
                }
                
                for ( let cwICol = Words[cwIRow].length - 1; cwICol >= 0; cwICol--) 
                {
                    
                    Matriz[row][col] = Words[cwIRow][cwICol];
                    
                    if(col - 1 >= 0){
                        console.log(col);
                        col--;
                    }                   
                    
                }

                    
                      
            }
            console.table(Matriz);
        }
        
    } 
    else if (direction === 'v') 
    {        
        if (sense === 1)
        {
            for ( let cwIRow = 0; cwIRow < Words.length; cwIRow++) 
            {
                row = Math.floor(Math.random() * Matriz.length);
                col = Math.floor(Math.random() * Matriz.length);

                row = convertToPositives(row, col)[0];
                col = convertToPositives(row, col)[1];
                console.log(`row: ${row}`);
                console.log(`col: ${col}`);
                /*while(!lineHVIsValid(Words[cwIRow], Matriz, row, col, sense)){
                    row = Math.floor(Math.random() * Matriz.length);
                    col = Math.floor(Math.random() * Matriz.length);

                    row = convertToPositives(row, col)[0];
                    col = convertToPositives(row, col)[1];
                }*/

                for ( let cwICol = 0; cwICol < Words[cwIRow].length; cwICol++) 
                {   
                }
            }      
            console.table(Matriz);
            for (let j = 0; j < Matriz.length; j++) {
                for (let i = 0; i < Matriz.length; i++) {
                    
                    console.log(Matriz[i][j]);
                    
                }
                
            }

        }
        
    /*        //console.table(Matriz);
    }else if (direction === 'd' && lineDIsValid( currWord, Matriz, row, col, sense)){
        k = 0;
        i = 0;
        if(sense === 1 ){

            while(k < currWord.length && i < currWord.length){
                Matriz[k][i] = currWord[i];
                k++; i++;
            }
        }else{
            k = currWord.length;
            i = currWord.length;
            while(k >= 0  && i >= 0 ){
                Matriz[k][i] = currWord[i];
                k--; i--;
            }
        }
    }
    return Matriz;
    
    }
}*/

}
}
