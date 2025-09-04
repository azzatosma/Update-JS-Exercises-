function changeImage() {
    const image = document.querySelector('#image');

    const url = prompt("Please enter your image URL:");
    const borderColor = prompt("Please enter border color:");
    const width = prompt("Please enter the width:");
    const height = prompt("Please enter the height:");
    const borderRadius = prompt("Please enter the border radius:");

    image.setAttribute('src', url);
    image.style.border = `2px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    image.style.padding = "10px";
    image.style.backgroundColor = '#cfc2dc';
}
