


// alert("hi")

function moveBox() {
 
    var Bag = document.querySelector('#Bag');
    var Button = document.querySelector('#Button');

    Bag.setAttribute('animation', 'property: position; to: 9.5 -3 -9; dur: 2000; easing: linear');
    Button.setAttribute('animation', 'property: position; to: 9.5 .2 -9; dur: 2000; easing: linear');
}

function Melt() {
 
    var Snowman = document.querySelector('#Snowman');
    var Clue1 = document.querySelector('#Clue1');

    Snowman.setAttribute('animation', 'property: scale; to: .4 -.3 .4; dur: 1000; easing: linear');
    Clue1.setAttribute('animation', 'property: position; to: 0 -4 -2; dur: 500; easing: linear');
}

function ButtonClick() {
 
    var ButtonRed = document.querySelector('#ButtonRed');
    var Door = document.querySelector('#Door');
    var Clue4 = document.querySelector('#Clue4');

    ButtonRed.setAttribute('animation', 'property: position; to: 0 .1 0; dur: 100; easing: linear');
    Door.setAttribute('animation', 'property: position; to: 0 -3 -3; dur: 4000; easing: linear');
    Clue4.setAttribute('animation', 'property: position; to: 10 1 -8; dur: 1000; easing: linear');
}
