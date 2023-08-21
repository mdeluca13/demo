const here = document.getElementById('here');
const text = document.getElementById('text');
const para = document.getElementById('para');
const reverse = document.getElementById('reverse');
const stacked = document.getElementById('stacked');
const stackedReversed = document.getElementById('stackedReversed');
const stackedSide = document.getElementById('stackedSide');
const stackedReversedSide = document.getElementById('stackedReversedSide');

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
});
