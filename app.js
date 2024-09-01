document.getElementById('addbtn').addEventListener('click', function() {
    const inputField = document.getElementById('inputfield');
    const newItemText = inputField.value.trim();

    if (newItemText === '') return; 

    const listItem = document.createElement('li');
    listItem.classList.add('flex', 'items-center', 'justify-between', 'border', 'border-black', 'rounded', 'px-3', 'py-2');



    // Create and add text input element...............................
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = newItemText;
    textInput.disabled = true;
    textInput.classList.add('flex-grow', 'mr-2', 'focus:outline-none', 'bg-transparent');
    textInput.addEventListener('blur', function() {
        textInput.disabled = true;
    });
    textInput.addEventListener('click', function() {
        textInput.disabled = false;
        textInput.focus();
    });
    listItem.appendChild(textInput);



    // Create and add edit button..............................
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('text-blue-500', 'hover:underline', 'mr-2');
    editButton.addEventListener('click', function() {
        textInput.disabled = false;
        textInput.focus();
    });
    listItem.appendChild(editButton);



    // Create and add remove button..................................
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('text-red-500', 'hover:underline');
    removeButton.addEventListener('click', function() {
        listItem.remove();
    });
    listItem.appendChild(removeButton);

    document.getElementById('dynamiclist').appendChild(listItem);

    // Clear input field
    inputField.value = '';
});


// vaiyaa ami asole baki functionality gula valo moto bujte parchi and code korchi but edit syestem ta kivabe banabo bujte parini ei jonno chatGPT theke HELP niyechilm tarpor code pore bujte parchi bapar ta.


/**new feature out of requierments which can change the whole backround in to rgb  */

const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");
const change =  document.getElementById("change")

btn.addEventListener("click", function(event) {
    event.preventDefault()
    const bgColor = RGB();
    body.style.backgroundColor = bgColor;
    change.style.backgroundColor = bgColor;
});

function RGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

