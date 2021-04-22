// Any code you will write for your website (in the future!) should go here
'use strict'

const formV = document.querySelector('form')
const textV = document.querySelector('.form-control')
const divV = document.querySelector('.list')
const bntV = document.querySelector('.btn')


formV.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let MyText = textV.value 
    console.log(MyText)

    let ParagraphV = document.createElement('p');
    let buttonV = document.createElement('span');

    buttonV.innerText = 'X';

    ParagraphV.innerText = MyText;

    ParagraphV.appendChild(buttonV);

    divV.appendChild(ParagraphV);

    textV.value = '';

buttonV.addEventListener('click',(evt) => {
let ThingToRemove = evt.target.parentElement

divV.removeChild(ThingToRemove)

}
)


});






