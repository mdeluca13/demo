const here = document.getElementById('here');
const text = document.getElementById('text');
const para = document.getElementById('para');
const reverse = document.getElementById('reverse');
const stacked = document.getElementById('stacked');
const stackedReversed = document.getElementById('stackedReversed');
const stackedSide = document.getElementById('stackedSide');
const stackedReversedSide = document.getElementById('stackedReversedSide');
const diagonal = document.getElementById('diagonal');
const diagonalUpsideDown = document.getElementById('diagonalUpsideDown');
const diagonalReversed = document.getElementById('diagonalReversed');
const diagonalUpsideDownReversed = document.getElementById('diagonalUpsideDownReversed');
const count = document.getElementById('count');

text.addEventListener('keyup', function display(){
    const value = text.value;
    para.innerHTML = value;
    
    let reverseText = '';

    for (let i = value.length - 1; i > -1; i--){
        reverseText = reverseText + value[i]
    }

    reverse.innerHTML = reverseText;
    stacked.innerHTML = value;
    stackedReversed.innerHTML = reverseText;
    stackedSide.innerHTML = value;
    stackedReversedSide.innerHTML = reverseText;
    diagonal.innerHTML = value;
    diagonalUpsideDown.innerHTML = value;
    diagonalReversed.innerHTML = reverseText;
    diagonalUpsideDownReversed.innerHTML = reverseText;
    
    console.log(value.length)
    if (value.length > 0) {
        count.innerHTML = 'Count = ' + value.length; 
    }
    else {
        count.innerHTML = '';
    }
    
});
