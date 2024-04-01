import Items from "./data/data.json";
import burger from './images/burger.svg';
function make_menu(){
    const main_section = document.createElement('div');
    main_section.classList.add('main-section');

    const menu_container =  document.createElement('div');
    menu_container.classList.add('menu-container');
    menu_container.classList.add('overlay');

    for(const obj of Items){
        var item = document.createElement('div');
        item.classList.add('menu-item');

        let our_menu = document.createElement('h1');
        our_menu.classList.add('our-menu');

        let item_img = document.createElement('img');
        item_img.classList.add('menu-item-img');
        item_img.src = burger;
        let item_heading = document.createElement('h1');
        item_heading.textContent = obj["heading"];
        item.classList.add('menu-item-heading');
        let item_para  = document.createElement('p');
        item_para.textContent = obj["description"];
        item.classList.add('menu-item-para');
        let item_button  = document.createElement('button');
        item_button.classList.add('order-now');
        item_button.textContent = 'Order Now';

        item.appendChild(item_img);
        item.appendChild(item_heading);
        item.appendChild(item_para);
        item.appendChild(item_button);
        menu_container.appendChild(item);
    }


    main_section.appendChild(menu_container);



    return main_section;
}




export default make_menu;