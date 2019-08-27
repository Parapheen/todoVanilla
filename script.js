//todoList object
todoList = {
    todos: [], //initially the todolist is empty array
    addTodo(todoText) { //adding the object with 2 properties into the array
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },
    changeTodo(position, todoText) {  //changing the item in the array, acessing the item in the array and changing
        //the property of the object (array item)
        this.todos[position].todoText = todoText;
    },
    deleteTodo(position) { //splice requires position and number of deleting items
        this.todos.splice(position, 1);
    },
    toggleCompleted(position){ //changing the second property of an object/item in array
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {
      let totalTodos = this.todos.length;
      let completedTodos = 0;
        this.todos.forEach((todo) => {
           if (todo.completed === true) {
               completedTodos++;
           }
        });
        this.todos.forEach((todo) => {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        })
    }
};

//handling object
let handlers = {
    addTodo() {
      let addTodoInputText = document.getElementById("addTodoInputText");
      todoList.addTodo(addTodoInputText.value);
      addTodoInputText.value = '';
      view.displayTodo();
    },
    changeTodo() {
        let positionChangeTodo = document.getElementById('changeTodoInputPosition');
        let todoTextChangeTodo = document.getElementById("changeTodoInputText");
        todoList.changeTodo(positionChangeTodo.value - 1, todoTextChangeTodo.value);
        view.displayTodo()
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodo()
    },
    toggleCompleted(position) {
        todoList.toggleCompleted(position);
        view.displayTodo()
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodo()
    }
};



//displaying object
let view = {
    displayTodo: function () {
        let todoOl = document.querySelector('ol');

        todoOl.innerHTML = '';
        todoList.todos.forEach((todo, position) => {
            let todoLi = document.createElement('li');
            let todoTextWithCompletion = '';
            if (todo.completed === true) {
                       todoTextWithCompletion = '(x) ' + todo.todoText;
                    } else {
                        todoTextWithCompletion = '( ) ' + todo.todoText;
                    }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todoLi.appendChild(this.createToggleCompletedButton());
            // todoLi.appendChild(this.createChangeButton());
            todoOl.appendChild(todoLi);
        },this);
        },
    createDeleteButton() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    createToggleCompletedButton() {
        let toggleCompletedButton = document.createElement('button');
        toggleCompletedButton.textContent = 'Completed';
        toggleCompletedButton.className = 'completedButton';
        return toggleCompletedButton;
    },
    // createChangeButton() {
    //     let changeButton = document.createElement('button');
    //     changeButton.textContent = 'Change';
    //     changeButton.className = 'changeButton';
    //     return changeButton;
    // },
    // createChangeInput() {
    //     let changeInput = document.createElement('input');
    //     changeInput.type = 'text';
    //     changeInput.className = 'changeInput';
    //     return (changeInput);
    // },
    setUpEventListener () {
        let todoOl = document.querySelector('ol');
        todoOl.addEventListener('click', (event) => {
            let elementClicked = event.target;
            if (elementClicked.className === "deleteButton") {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
            if (elementClicked.className === 'completedButton') {
                handlers.toggleCompleted(parseInt(elementClicked.parentNode.id))
            }
        });
    }
};

view.setUpEventListener();
//checking the flow of the functions
function runWithDebugger (ourFunction) {
    debugger;
    ourFunction();
}

//timeout
// setTimeout(() => {
//     console.log('Wake up!')
// }, 5000);

//todos.forEach()

//understanding this gordonzhu git
