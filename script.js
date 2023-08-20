const here = document.getElementById('here');
const text = document.getElementById('text');



text.addEventListener('change', function display(){
    const value = text.innerHTML;
    let pEl = document.createElement('p');
    console.log(value)
    pEl.appendChild(value);
    here.appendChild(pEl);
});
