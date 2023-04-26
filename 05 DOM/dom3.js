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



function runEvent (e) {
    console.log('EVENT TYPE: ' + e.type);

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'
}