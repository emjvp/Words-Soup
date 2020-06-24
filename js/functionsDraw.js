function drawSoup( tableSoupHtml, size, Mat ) {
    let nodeTr;
    let nodeTd;
    let tdindx = 1;
    for (let i = 0; i < size; i++) {
        nodeTr = document.createElement('TR');
        tableSoupHtml.appendChild(nodeTr);        
        for (let j = 0; j < size; j++){
            nodeTd = document.createElement('TD');
            nodeTr.appendChild(nodeTd);                                    
            tdindx ++;
        }    
        
    }
    
}

function fillSpaces(Mat, size){
    const ALPHABEAT = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','U','V','W','X','Y','Z'];
    
    let indx = 0;
    // 

    let currLet = '';
    // 

    
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