const list = document.querySelector('#list')

function addList (){
    const newItem = document.createElement('li')
    newItem.textContent = `Item 3`
    list.appendChild(newItem)
}

function removeList (){
    if(list.lastChild) {

        console.log(`removed ${list.lastChild.textContent}`)  // Output: Item 3
        list.removeChild(list.lastElementChild)
    }else{
        alert("List is empty")
    }
}