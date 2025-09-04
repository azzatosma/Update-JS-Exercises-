const text = document.querySelector('.text')
console.log(text);

function changeContent(){
    title.textContent = "Welcome to the DOM"
}

function changeElement(){
    text.innerHTML = `hi welcome to <strong> my Website </strong>`;
}