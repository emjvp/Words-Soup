function Mat(SOUPSIZE){
    let lettersMat = new Array(SOUPSIZE);
    // defino la matriz
    for( let i = 0 ; i < SOUPSIZE ; i++){
        lettersMat[i] = new Array(SOUPSIZE);        
    }
    
   
    return lettersMat;
}