const button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick (e) {
    // console.log('button clicked');
    // document.getElementById('header-title').textContent = 'Changed'
    // document.getElementById('main').style.backgroundColor = '#f4f4f4'
    // console.log(e.target);
    // console.log(e.target.id);
    const output = document.getElementById('output')
    output.innerHTML = '<h3>'+e.target.id+'</h3>'

    // console.log(e.type);
    // console.log(e.clientX);
    console.log(e.ctrlKey);
}