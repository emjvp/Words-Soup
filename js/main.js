
const soupSize = 20;

const wordIn = document.getElementById('wordIn');
const addBtn = document.getElementById('addBtn');
const listHtml = document.getElementById('wordList');
const soupTable = document.getElementById('soupTable');
const wordArr = [];

addBtn.addEventListener("click", () => {
    
    wordArr = addWords(wordIn.value);

    listWords(wordArr, listHtml);
    wordIn.value = '';
});

drawSoup(soupTable, soupSize);
