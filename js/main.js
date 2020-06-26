
const SOUPSIZE = 20;

const wordIn = document.getElementById('wordIn');
const addBtn = document.getElementById('addBtn');
const listHtml = document.getElementById('wordList');
const soupTable = document.getElementById('soupTable');
const generateSoupBtn = document.getElementById('generateSoupBtn');
let wordsArr = ['hhdfsdg', 'll', 'sdfksdnfnk'];

let add = false;
let generateSoup = false;


addBtn.addEventListener("click", () => {

    if (wordIn.value === '' && wordIn.value.length < SOUPSIZE){ return; }
    wordArr = addWords(wordIn.value, wordsArr);        
    listWords( wordsArr, listHtml );
    wordIn.value = '';
    add = true;

});

generateSoupBtn.addEventListener("click", () => {

    
    
        

    if(add && !generateSoup) {
        generateSoupBtn.setAttribute('class', 'btn btn-warning mt-2');
        
        generateSoup = true;
    }
    

});

//drawSoup( soupTable, SOUPSIZE, chargeWords(wordsArr));
chargeWords(wordsArr);







