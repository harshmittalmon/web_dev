import food_bg from './images/food-bg.webp';
function about_maker(){
    const main_div = document.createElement('div');
    main_div.classList.add('main-div');

    const heading  = document.createElement('h1');
    heading.textContent =  "About Us";
    heading.classList.add('main-div-heading');

    const main_div_container = document.createElement('div');
    main_div_container.classList.add('main-div-container');
    const main_div_img = document.createElement('img');
    main_div_img.classList.add('main-div-img');
    main_div_img.src = food_bg;
    const main_div_para = document.createElement('p');
    main_div_para.classList.add('main-div-para');
    main_div_para.innerHTML = "Content\n".repeat(50);


    main_div.appendChild(heading);
    main_div_container.appendChild(main_div_para);
    main_div_container.appendChild(main_div_img);
    main_div.appendChild(main_div_container);

    return main_div;

}
export default about_maker;





