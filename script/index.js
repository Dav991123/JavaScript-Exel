const addButton = document.getElementById('add-button');
const addFormInput = document.getElementById('add-form-input'); //{}
const ulList = document.querySelector('#book-list > ul');
const hideBox = document.getElementById('hide')
const searchInput = document.getElementById('searchBar');


// add book functional
const handleAddBook = () => {
    const { value } = addFormInput;
    if (value.trim()) {
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteButton = document.createElement('span');
    
        bookName.innerText = value;
        deleteButton.innerText = 'delete';
    
        bookName.classList.add('name'); 
        deleteButton.classList.add('delete');
        li.appendChild(bookName);
        li.appendChild(deleteButton);
        ulList.appendChild(li);

        addFormInput.value = '';        
    }
   
}

addButton.addEventListener('click', handleAddBook);
// -----------------------------------------------



// delete function
const handleDeteleBook = event => {
    const { target } = event;
    if (target.className === 'delete') {
        const li = target.parentElement;
        ulList.removeChild(li);
    }
}

ulList.addEventListener('click', handleDeteleBook);
// -----------------------------------------------



// hide books functional
const handleHideBooks = event => {
    const { target } = event;
    ulList.style.display = target.checked ? 'none' : 'block';
}

hideBox.addEventListener('input', handleHideBooks);
// -----------------------------------------------
