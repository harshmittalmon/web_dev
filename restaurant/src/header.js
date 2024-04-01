import Icon from './images/coffee-icon.svg';
import Menu_icon from './images/menu.svg';
import Close_icon from './images/close.svg';

function header_maker(){
    const header = document.createElement('header');

    const header_icon_title_container = document.createElement('div');
    header_icon_title_container.classList.add('header-icon-title-container');

    const header_icon = new Image();
    header_icon.src = Icon ; 
    header_icon.alt = "header-icon";
    header_icon.classList.add('header-icon');

    const header_title = document.createElement('span');
    header_title.classList.add('header-title');
    header_title.textContent = "Lavish";

    header_icon_title_container.appendChild(header_icon);
    header_icon_title_container.appendChild(header_title);

    const header_middle_div = document.createElement('div');
    header_middle_div.classList.add('header-middle-div');
    // header_middle_div.classList.add('header-middle-div-phone');

    const home_button = document.createElement('button');
    home_button.classList.add('button');
    home_button.classList.add('home-button');
    home_button.textContent  = "Home";
    
    const menu_button = document.createElement('button');
    menu_button.classList.add('button');
    menu_button.classList.add('menu-button');
    menu_button.textContent = "Menu";

    const about_us_button = document.createElement('button');
    about_us_button.classList.add('button');
    about_us_button.classList.add('about-us-button');
    about_us_button.textContent = "About Us";

    const header_empty_div = document.createElement('div');
    header_empty_div.classList.add("header-empty-div");

    let img = document.createElement('img');
    img.src  = Menu_icon;
    img.alt = "menu_icon";
    img.classList.add('menu-icon');
    header_empty_div.appendChild(img);


    const close_img = document.createElement('img');
    close_img.src = Close_icon;
    close_img.alt = "close_icon";
    close_img.classList.add('close-icon');
    header_empty_div.appendChild(close_img);
    


    img.addEventListener('click', ()=>{

    })
    close_img.addEventListener('click',()=>{
        
    })




    header_middle_div.appendChild(home_button);
    header_middle_div.appendChild(menu_button);
    header_middle_div.appendChild(about_us_button);
    
    header.appendChild(header_icon_title_container);
    header.appendChild(header_middle_div);
    header.appendChild(header_empty_div);

    return header;
}
export default header_maker;