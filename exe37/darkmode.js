const toggleMode = document.querySelector('#toggle-mode')

toggleMode.addEventListener('click', switchMode);

function switchMode() {
    document.body.classList.toggle('dark-mode');
    toggleMode.classList.toggle('dark-mode');

    if (toggleMode.classList.contains('dark-mode')){
        localStorage.setItem('mode', 'dark-mode');
        toggleMode.textContent = 'Toggle Dark Mode';
    }

    else {
        toggleMode.textContent = 'Toggle Light Mode';
        localStorage.setItem('mode', 'light-mode');
    }
    
   
}
window.addEventListener("DOMContentLoaded", function(){
    const storedMode = localStorage.getItem('mode');
    if (storedMode === 'dark-mode'){
        document.body.classList.add('dark-mode');
        toggleMode.classList.add('dark-mode');
        toggleMode.textContent = 'Toggle Dark Mode';
        
    }else{
        toggleMode.textContent = 'Toggle Light Mode';
    }
 });
