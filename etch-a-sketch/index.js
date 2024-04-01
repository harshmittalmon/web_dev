
function makegrid(container, num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');

        let prop = getComputedStyle(container);
        let width = 1000;
        let k = 1;
        for (k = 1; k < 100; k++) {
            if ((num * k +2*num ) > (600)) break;
        }
        let height = k;
        div.setAttribute('style', 'display:flex;');
        div.classList.add('second-level');
        for (let j = 0; j < num; j++) {
            const divchild = document.createElement('div');
            // divchild.textContent = `i is ${i} and j is ${j}`;
            divchild.style.width = "" + width + "px";
            divchild.style.height = "" + height + "px";
            divchild.classList.add('third-level');
            div.appendChild(divchild);
           
        }
        container.appendChild(div);
    }
}
var isdouble = false;
let maindiv = document.createElement('div');
maindiv.classList.add('maindiv');
let body = document.querySelector('body');
body.appendChild(maindiv);
let num = prompt("enter the grid size : ");

makegrid(maindiv, num);
let nodelist = document.querySelectorAll('.third-level');
nodelist.forEach(element => {
    element.addEventListener('click', function (e) {
        isdouble = true;
        e.target.style.backgroundColor = "white";
        console.log(e.target);
    })
});


