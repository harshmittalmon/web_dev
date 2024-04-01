import home from "./home";
import make_menu from "./menu";
import "./header.css";
import "./about-us.css";
import about_maker from "./about-us";
import "./home.css";
import "./menu.css"; 
import "./utility.css";
import Icon from './images/coffee-icon.svg';
import header_maker from "./header";


const header = header_maker();
const menu  = make_menu();
const menu_button = header.querySelector('.menu-button');
const about_us_button = header.querySelector('.about-us-button');
const home_button = header.querySelector('.home-button');
const about_us = about_maker();

home_button.addEventListener('click', function(){
    document.body.innerHTML = '';
    home_button.classList.add('active');
    menu_button.classList.remove('active');
    about_us_button.classList.remove('active');
    document.body.appendChild(header); 
    document.body.appendChild(home());
})

menu_button.addEventListener('click',function(){

    document.body.innerHTML = '';
    menu_button.classList.add('active');
    home_button.classList.remove('active');
    about_us_button.classList.remove('active');
    document.body.appendChild(header);
    document.body.appendChild(menu);
})

about_us_button.addEventListener('click',function(){
    about_us_button.classList.add('active');
    menu_button.classList.remove('active');
    home_button.classList.remove('active');
    document.body.innerHTML = '';
    document.body.appendChild(header);
    document.body.appendChild(about_us);
})

document.body.appendChild(header);
document.body.appendChild(home());
home_button.classList.add('active');
