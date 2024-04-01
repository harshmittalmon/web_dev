const add_book = document.querySelector(".add-book > button");
const book_store = document.querySelector(".books");
const submit = document.querySelector(".submit-book");
const modal = document.querySelector(".dialog-modal");
const cancel = document.querySelector(".cancel-book");

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read-status');
const submitBtn = document.querySelector('.submitBtn');

const book_array = [];
function Book_constructor(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function clear_values(){
    bookAuthor.value = "";
    bookPages.value = "";
    bookTitle.value = "";
    bookRead.checked =false ;
}



function createContainer(obj){
    const main          = document.createElement('div');
    const main_title    = document.createElement('h1');
    const main_author   = document.createElement('h2');
    const main_pages    = document.createElement('p');
    const main_delete   = document.createElement('button');
    const main_read     = document.createElement('div');
    
    main_read.innerHTML=" <label for='read_or_not'>Read : </label> <input type ='checkbox' id='read_or_not'> ";
    if(obj.read==="Read"){
        main_read.lastElementChild.checked=true;        
    }
    
    main_read.classList.add('flex');
    main_read.classList.add('space-between');


    main_title.textContent   = ` Book Name : ${obj.title}`;
    main_author.textContent  = ` Book Author : ${obj.author}`;
    main_pages.textContent   = ` Total Pages : ${obj.pages}`;
    main_delete.textContent="Delete";
    main_delete.classList.add('delete');
    main_delete.classList.add('btn-primary');


    main.appendChild(main_title);
    main.appendChild(main_author);
    main.appendChild(main_pages);
    main.appendChild(main_read);
    main.appendChild(main_delete);  
    checkbox_event(main_read.lastElementChild,main);
    return main;
}

function display(){
    for(const obj of book_array){

        if(obj.displayed ===true )continue;
        const book = createContainer(obj);
        if(obj.read==="Read"){
            book.style.borderColor= "green";

        }
        book_store.appendChild(book); 
        obj.displayed=true;
        
    }
}

function checkbox_event(checkbox,main) {
    console.log(main);
    console.log(checkbox);
    checkbox.addEventListener('change', ()=>{
        if(checkbox.checked)main.style.borderColor = "green";
        else main.style.borderColor = "red";
    })
    
}

function add_to_store(){
    if(bookRead.checked)read="Read";
    else read  = "Not Read";
    const book = new Book_constructor( bookTitle.value,bookAuthor.value,bookPages.value,read);
    book_array.push(book);
    display(book_array);
}


// add book will display modal 
add_book.addEventListener("click", ()=> modal.showModal());

// cancelled the book addition operation
cancel.addEventListener("click",(e)=> {
    e.preventDefault();
    modal.returnValue = "";    
    modal.close();
    clear_values();
})

// when submit first add the book to array then call display function and clear values
submit.addEventListener("click",(e)=> {
    e.preventDefault();
    add_to_store();
    modal.close(bookTitle,bookAuthor,bookPages,bookRead);
})
modal.addEventListener("close",function (){
    clear_values();
})



book_store.addEventListener("click",  (e)=>{
    const clicked_button = e.target;
    const container = clicked_button.parentNode;
    const title = container.firstElementChild.textContent;
    for (let i = 0; i < book_array.length; i++) {
        if ( clicked_button.classList.contains('delete') && ` Book Name : ${book_array[i].title}` === title) {
            console.log("reached but not removed");
            book_array.splice( i, 1);
            container.remove();
        }
    }
    display();
});



