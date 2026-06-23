const todosContainer = document.querySelector('.todos-container');
const openModalButton = document.querySelector('.open-modal-button');
const modalScreen = document.querySelector('.modal-screen');
const input = document.querySelector('.input');
const create = document.querySelector('.create');
const cancel = document.querySelector('.cancel');
const xBtn = document.querySelector('.x-btn');
const statusBtn = document.querySelector('.status');

const todoLists = [];

function setData() {
    const datas = JSON.parse(localStorage.getItem('todoData')); 

    
    

};

function openModalHandler() {
    modalScreen.classList.remove('hidden');
};

function closeModalHandler() {
    modalScreen.classList.add('hidden');
    input.value = '' ;
};

function createBtnHandler(title) {

    todoLists.push(`{ id : ${todoLists.length + 1} , status : وضیعت , title : ${title} , } ,`);

    todosContainer.insertAdjacentHTML('afterbegin',
        `
        <article class="todo">
          <div class="todo-data">
            <div class="checkbox">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
              </span>
            </div>
            <div>
              <p class="todo-title">${title}</p>
            </div>
          </div>

          <div class="todo-buttons">
            <button class="delete">حذف</button>
            <div class="relative">
              <button class="status">وضعیت</button>
              <ui class="status-menu">
                <li value="default">معمولی</li>
                <li value="important">مهم</li>
                <li value="very-important">خیلی مهم</li>
              </ui>
            </div>
            <button class="complete">تکمیل</button>
          </div>
        </article>

        `
    );

    closeModalHandler();
    localStorage.setItem('todoData' , JSON.stringify(todoLists));
};



openModalButton.addEventListener('click',openModalHandler);
cancel.addEventListener('click',closeModalHandler);
xBtn.addEventListener('click',closeModalHandler);


