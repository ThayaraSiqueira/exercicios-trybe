

function createBtn(buttonName, id){
    let btnContainer = document.querySelector('div');
    let btn = document.createElement('button');
    btnId = id;
    btn.id = btnId;
    btn.innerHTML = buttonName;
    
    btnContainer.appendChild(btn);
};

createBtn('Mude a cor de fundo aqui','button-backg');
createBtn('Mude a cor do texto aqui','button-text');
createBtn('Mude o tamanho da fonte aqui','button-size');
createBtn('Mude o espaçamento entre as linhas do texto aqui','button-line');
createBtn('Mude o tipo da fonte aqui','button-font');



let bkgBtn = document.querySelector('#button-backg');

bkgBtn.addEventListener('click', function(event){
    let colorArray = ['red', 'blue', 'black', 'grey', 'pink', 'yellow', 'green'];
    for (let i = 0; i < colorArray.length; i += 1) {
        document.body.style.background = colorArray[i];
        event.target = i + 1;
    }
});






//Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
