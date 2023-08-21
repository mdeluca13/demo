const here = document.getElementById('here');
const text = document.getElementById('text');

text.addEventListener('keyup', function display(){
    const value = text.value;
    const para = document.getElementById('para');
    para.innerHTML = value;
    
    let reverseText = '';
    const reverse = document.getElementById('reverse');
    for (let i = value.length - 1; i > -1; i--){
        reverseText = reverseText + value[i]
    }
    reverse.innerHTML = reverseText;
});
