
const SOUPSIZE = 20;

const wordIn = document.getElementById('wordIn');
const addBtn = document.getElementById('addBtn');
const listHtml = document.getElementById('wordList');
const soupTable = document.getElementById('soupTable');
const generateSoupBtn = document.getElementById('generateSoupBtn');
let wordsArr = ['sdfdsfsdf', 'dsdsldsdfeere'];
let lettersMat = Mat();
let add = false;
let generateSoup = false;


addBtn.addEventListener("click", () => {

    if (wordIn.value === '' && wordIn.value.length < SOUPSIZE){ return; }
    wordArr = addWords(wordIn.value, wordArr);
    
    
    listWords( wordArr, listHtml );
    wordIn.value = '';
    add = true;

});

generateSoupBtn.addEventListener("click", () => {

    
    chargeWords(wordsArr);
    

    if(add && !generateSoup) {
        generateSoupBtn.setAttribute('class', 'btn btn-warning mt-2');
        drawSoup( soupTable, SOUPSIZE, Mat);
        generateSoup = true;
    }
    

});

chargeWords(wordsArr);







