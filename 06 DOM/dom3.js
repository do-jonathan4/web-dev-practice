// const button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick (e) {
    // console.log('button clicked');
    // document.getElementById('header-title').textContent = 'Changed'
    // document.getElementById('main').style.backgroundColor = '#f4f4f4'
    // console.log(e.target);
    // console.log(e.target.id);
    // const output = document.getElementById('output')
    // output.innerHTML = '<h3>'+e.target.id+'</h3>'

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.ctrlKey);
// }

// const button = document.getElementById('button')
// const box = document.getElementById('box')

// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)

const itemInput = document.querySelector('input[type="text"]')
const form = document.querySelector('form')
const select = document.querySelector('select')

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)
// itemInput.addEventListener('input', runEvent)
// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)
form.addEventListener('submit', runEvent)

function runEvent (e) {
    e.preventDefault()
    console.log('EVENT TYPE: ' + e.type);

    // console.log(e.target.value);

    // document.getElementById('output').innerHTML = e.target.value

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'
}