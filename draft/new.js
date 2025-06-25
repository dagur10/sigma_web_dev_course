let cont = document.getElementsByClassName("box");
Array.from(cont).forEach(element => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
