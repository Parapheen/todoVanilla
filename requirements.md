[x] It should have a place to store todos
    const array = ['item 1', 'item 2] calling the array
[x] It should have a way to display todos
    console.log(array)
[x] It should have a way to add new todos
    array.push('new item added')
[x] It should have a way to change todos
    array [0] = 'change the item in the array'
[x] It should have a way to delete todos
    array.splice(0,1) deleting the first item, 1 is the 
    quantity of deleting 


Same requirements for fuctions
done

todos = ['item1', 'item2', 'item3']

function displayToDo(){
	console.log('My todo:', todos);
}

function addToDo(newValue){
	todos.push(newValue);
	displayToDo();
}

function addToDo(newValue){
	todos.push(newValue);
	displayToDo();
}

function deleteToDo(position) {
	todos.splice(position, 1);
	displayToDo();
}


function inside an object is a method

object {
    surname: "Petrovich",
    name: function () {
    console.log(this.surname);
    },
}
