function drawSoup( tableSoupHtml, size, Mat ) {
    console.log(Mat);
    for(let i = 0; i < Mat.length; i++){
        for(let j = 0; j < Mat.length; j++){
            
        }
    }

    let nodeTr;
    let nodeTd;
    
    // let FinalM = fillSpaces(Mat, size);
    
    for (let i = 0; i < size; i++) {
        nodeTr = document.createElement('TR');
        tableSoupHtml.appendChild(nodeTr);        
        for (let j = 0; j < size; j++){
            nodeTd = document.createElement('TD');

            nodeTr.appendChild(nodeTd).textContent = Mat[i][j];                                    
            
        }    
        
    }
    
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