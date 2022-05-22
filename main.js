
function diamond(){

    const container = document.querySelector(".container");

    const creat = document.createElement('div');
    creat.classList.add('diamond');
    creat.innerHTML = `🔸`;

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random()*3 + 10+ "s";
    
    container.appendChild(creat);
    setTimeout(() => {
        creat.remove();
    }, 10000);

}
diamond();

setInterval(diamond, 500);




function circle(){

    const container = document.querySelector(".container");

    const creat = document.createElement('div');
    creat.classList.add('circle');
    creat.innerHTML = `🟡`;

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random()*3 + 10+ "s";
    
    container.appendChild(creat);
    setTimeout(() => {
        creat.remove();
    }, 10000);

}
circle();

setInterval(circle, 500);