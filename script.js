const here = document.getElementById('here');
const text = document.getElementById('text');

text.addEventListener('keyup', function display(){
    const value = text.value;
    const para = document.getElementById('para');
    // let pEl = document.createElement('p');
    console.log(value)
    // pEl.append(value);
    para.innerHTML = value;
    // here.append(pEl);
});
