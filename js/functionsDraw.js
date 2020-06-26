function drawSoup( tableSoupHtml, size, Mat ) {
    //console.log(Mat);
    /*
    for(let i = 0; i < Mat.length; i++){
        for(let j = 0; j < Mat.length; j++){
            
        }
    }*/

    let nodeTr;
    let nodeTd;
    
    // let FinalM = fillSpaces(Mat, size);
    
    for (let i = 0; i < size; i++) 
    {
        nodeTr = document.createElement('TR');
        tableSoupHtml.appendChild(nodeTr);        
        for (let j = 0; j < size; j++)
        {
            nodeTd = document.createElement('TD');
            if(Mat[i][j] != ''){
                nodeTr.appendChild(nodeTd).textContent = Mat[i][j];                                    
            }
            
            
        }    
        
    }
    
}

