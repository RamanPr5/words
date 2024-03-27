let words;
let count = 0;
let card;
let eng;
let rus;
let rus2;
let nextBtn;
let index;
let currentIndex;
let tryAgain;
let checkbox = document.querySelector('.switch-input');
let main;
main = document.createElement('main');
main.classList.add('main');
document.body.append(main);

let bow = document.querySelector('.bow');
let wow = document.querySelector('.wow');

const corgi = document.querySelector('.corgi');
corgi.addEventListener('click', ()=> {

    bow.style.display = 'block';
    setTimeout(() => bow.style.display = 'none', 500);
    setTimeout(() => wow.style.display = 'block', 100);
    setTimeout(() => wow.style.display = 'none', 600);
})



// {
//     setTimeout(() => {
//         modalWindow.classList.add('_active');
//         titleModal.innerHTML = el.title;
//     }, (i + 1) * 5000);
//     clearTimeout();
//     modalWindow.classList.remove('_active');
// });

checkbox.addEventListener('change', () => {   
    main.innerHTML = '';
      start();
})

let topics = document.querySelector('.topic-head');
let topicBlock = document.querySelector('.topic-block');
topics.addEventListener('click', ()=> {

    if(!topicBlock.classList.contains("active")){
        topicBlock.classList.add("active");
    } else {
        topicBlock.classList.remove("active");
    }
})
  

let engNewWord = document.querySelector('.eng-word');
let rusNewWord = document.querySelector('.rus-word');
let btnNewWord = document.querySelector('.add-words-btn');




function start() {
    // words = [
    //     {word: 'revenue', 
    //     hint: 'доход'},
    //     {word: 'operate', 
    //     hint: 'управлять, действовать'},
    //    {word:'provide',
    //     hint: 'предоставлять, обеспечивать'},
    //    {word: 'specialize',
    //     hint: 'специализироваться'},
    //    {word: 'subsidiares',
    //     hint: 'дочерние компании'},
    //     {word:'competitors',
    //     hint: 'конкуренты'},
    //    {word: 'advertizing',
    //     hint: 'реклама'},
    // ];

    let newWords = JSON.parse(localStorage.getItem("newWords")) || [];
    let wordlocal= {
        engWord: 'w',
        rusWord: 'e',
    };

    card = document.createElement('div');
    card.classList.add('card');
    main.append(card);
    
    eng = document.createElement('div');
    eng.classList.add('eng');
    card.append(eng);
    
    rus = document.createElement('div');
    rus.classList.add('rus');
    card.append(rus);

    rus2 = document.createElement('p');
    rus2.classList.add('rus2');
    rus.append(rus2);

    nextBtn = document.createElement('div');
    nextBtn.classList.add('next');
    main.append(nextBtn);
    nextBtn.innerText = 'next word';

    tryAgain = document.createElement('button');
    tryAgain.classList.add('next', 'd');
    tryAgain.innerText = 'Train again';

    nextBtn.addEventListener('click', ()=>{
        count++;
        currentIndex = index;
        randomWord();
        showWord();
        console.log(newWords.length)
        // if( newWords.length === 0){
        //     main.innerHTML = '';
        //     main.append(tryAgain);
        //     tryAgain.classList.remove('d');
        //     tryAgain.classList.add('a');
        // } 
    })

    tryAgain.addEventListener('click', () => {
        newWords = JSON.parse(localStorage.getItem("newWords")) || [];
        main.innerHTML = '';
        count = 0;
        loc()
        start();
    });

    

    randomWord();
    showWord();
}


let newWords = JSON.parse(localStorage.getItem("newWords")) || [];
let wordlocal= {
    engWord: 'w',
    rusWord: 'e',
};

btnNewWord.addEventListener('click', (e)=> {
    e.preventDefault();

    wordlocal.engWord = engNewWord.value;
    wordlocal.rusWord = rusNewWord.value;

    newWords = JSON.parse(localStorage.getItem("newWords")) || [];
    newWords.push(wordlocal);

    localStorage.setItem('newWords', JSON.stringify(newWords));
    localStorage.setItem('wordlocal', JSON.stringify(wordlocal));



    engNewWord.value = '';
    rusNewWord.value = '';
})


function loc(){
    newWords = JSON.parse(localStorage.getItem("newWords")) || [];
    // newWords.push(wordlocal);

    localStorage.setItem('newWords', JSON.stringify(newWords));
    localStorage.setItem('wordlocal', JSON.stringify(wordlocal));
    return newWords
}

function randomWord() {
    let len = newWords.length-1;
    let random = Math.random();
    let ran = random * len;
    index = Math.ceil(ran);
    return index
}



function showWord() {

    if (checkbox.checked) {

        // rus2.innerText = words[index].word;
        // eng.innerText = words[index].hint;

        rus2.innerText = newWords[index].engWord;
        eng.innerText = newWords[index].rusWord;
        } else {

        // eng.innerText = words[index].word;
        // rus2.innerText = words[index].hint;

        eng.innerText = newWords[index].engWord;
        rus2.innerText = newWords[index].rusWord;
    } 

    newWords.splice(index, 1);
    console.log(newWords.length)
    if( newWords.length === 0){
        main.innerHTML = '';
        main.append(tryAgain);
        tryAgain.classList.remove('d');
        tryAgain.classList.add('a');
    } 
}
start();