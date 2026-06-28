const todosContainer = document.querySelector('.todos-container');
const openModalButton = document.querySelector('.open-modal-button');
const modalScreen = document.querySelector('.modal-screen');
const input = document.querySelector('.input');
const create = document.querySelector('.create');
const cancel = document.querySelector('.cancel');
const xBtn = document.querySelector('.x-btn');
const statusBtn = document.querySelector('.status');
const deleteBtns = document.querySelectorAll('.delete');
const todos = document.querySelectorAll('.todo');


const todoLists = [];


function openModalHandler() {
    modalScreen.classList.remove('hidden');
};

function closeModalHandler() {
    modalScreen.classList.add('hidden');
};

function addTodoToMainArray() {
  todosContainer.innerHTML = '';
  const todoTitle = input.value;
  const todo = {
      id: Math.floor(Math.random()*99999),
      title : todoTitle,
      iscomplete:false,
  };

  // console.log(todoLists.every(function(todoList){return todoList.id === todo.id}));
  
  // if () {
    todoLists.push(todo);
  // };
  


  

};

function addToLocalStorage () {
  todoLists.forEach(function(todoList){
    localStorage.setItem('datasTodos' , JSON.stringify(todoList));
  });
    
};

function createTodoHandler () {
  addTodoToMainArray();
  addToLocalStorage();
  todoLists.forEach(function(todoList){
    
    console.log(todoList);
    
    todosContainer.insertAdjacentHTML('beforeend',
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
              <p class="todo-title">${todoList.title}</p>
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
  });
  input.value = '' ;
  closeModalHandler()
};


openModalButton.addEventListener('click',openModalHandler);
cancel.addEventListener('click',closeModalHandler);
xBtn.addEventListener('click',closeModalHandler);
create.addEventListener('click',createTodoHandler)


