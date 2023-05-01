const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')

// form submit
form.addEventListener('submit', addItem)

// delete event
itemList.addEventListener('click', removeItem)

// filter event
filter.addEventListener('keyup', filterItems)

function addItem(e) {
    e.preventDefault()

    // get input value
    const newItem = document.getElementById('item').value
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    // create del button element
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))

    // append to list
    li.appendChild(deleteBtn)
    itemList.appendChild(li)
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

function filterItems(e) {
    // convert text to lowercase
    const text = e.target.value.toLowerCase()

    const items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(item => {
        const itemName = item.firstChild.textContent
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

}