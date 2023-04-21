// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// // document.title = 123

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // document.all[10].textContent = 'HELLO'

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// get element by ID

// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header')

// console.log(headerTitle)
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)
// console.log(headerTitle.innerHTML)

// headerTitle.textContent = "Hello"
// headerTitle.innerText = "Goodbye"

// header.style.borderBottom = 'solid 3px #000'

// get elements by classname

// const items = document.getElementsByClassName('list-group-item')
// console.log(items);

// items[2].textContent = 'HELLO'
// items[3].style.fontWeight = 'bold'

// // need to loop through each item
// Object.values(items).forEach(element => {
//     element.style.backgroundColor = '#f4f4f4'
// });

// get elements by tagname

// const li = document.getElementsByTagName('li')
// console.log(li);

// li[2].textContent = 'HELLO'
// li[3].style.fontWeight = 'bold'

// // need to loop through each item
// Object.values(li).forEach(element => {
//     element.style.backgroundColor = '#f4f4f4'
// });

// query selector

// const header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 3px #000'

// const input = document.querySelector('input')
// input.value = 'HELLO WORLD'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'

// query selector all
const titles = document.querySelectorAll('.title')

console.log(titles);
titles[0].textContent = 'HELLO'

const odd = document.querySelectorAll('li:nth-child(odd)')
Object.values(odd).forEach(element => {
    element.style.backgroundColor = '#f4f4f4'
});