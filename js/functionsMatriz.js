function Mat(){
    let lettersMat = new Array(20);
    // defino la matriz
    for( let i = 0 ; i < SOUPSIZE ; i++){
        lettersMat[i] = new Array(20);        
    }
    return lettersMat;
}