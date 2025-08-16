const formItem = document.getElementById('item-form')
const inputItem = document.getElementById('input-item')
const listItem = document.getElementById('items-list')

function addItem(e){
    e.preventDefault();
    if(inputItem.value.trim() === ''){
        alert('please add item')
        return
    }
    //create new element

const li = document.createElement('li');

// Create a span for the item text
const span = document.createElement('span');
span.textContent = inputItem.value;
li.appendChild(span);

// Create and append the delete button
const button = createButton('item-button');
li.appendChild(button);

// Append to list
listItem.appendChild(li);

// Clear the input
inputItem.value = '';


    console.log(li);
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-trash delete-btn');
    button.appendChild(icon);

    console.log(button);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
formItem.addEventListener('submit', addItem)